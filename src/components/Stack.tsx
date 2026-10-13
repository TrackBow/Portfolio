import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent as ReactPointerEvent } from "react";
import { skillGroups } from "../data/skills";
import { projectsData } from "../data/project";

/* ---------- Géométrie du graphe ---------- */

const CENTER = { x: 0, y: 0 };
const RING_X = 240;
const RING_Y = 185;
const SKILL_RADIUS = 125;
const SKILL_FONT = 15;
const GROUP_FONT = 17;
const PILL_H = 34;
const GROUP_H = 44;

/** Largeur approximative d'une pastille de texte (Schibsted Grotesk). */
const pillWidth = (label: string, size: number) => Math.round(label.length * size * 0.56 + 28);

type Box = { x: number; y: number; w: number; h: number; fixed: boolean; tx: number; ty: number };

/**
 * Place les catégories sur une ellipse et leurs compétences en éventail,
 * puis écarte les pastilles qui se chevauchent (relaxation simple, calculée une seule fois).
 */
function computeLayout() {
  const boxes: Box[] = [];
  boxes.push({ x: 0, y: 0, w: 110, h: 110, fixed: true, tx: 0, ty: 0 });

  const groups = skillGroups.map((group, gi) => {
    const angle = (gi / skillGroups.length) * Math.PI * 2;
    const base = { x: Math.cos(angle) * RING_X, y: Math.sin(angle) * RING_Y };
    boxes.push({ ...base, w: pillWidth(group.label, GROUP_FONT) + 8, h: GROUP_H, fixed: true, tx: base.x, ty: base.y });
    const n = group.skills.length;
    const spread = Math.min(0.5, 2.4 / n);
    const skills = group.skills.map((name, i) => {
      const a = angle + (i - (n - 1) / 2) * spread;
      const x = base.x + Math.cos(a) * SKILL_RADIUS * 1.1;
      const y = base.y + Math.sin(a) * SKILL_RADIUS * 0.8;
      const box: Box = { x, y, w: pillWidth(name, SKILL_FONT), h: PILL_H, fixed: false, tx: x, ty: y };
      boxes.push(box);
      return { name, box };
    });
    return { group, base, skills };
  });

  const PAD = 10;
  for (let iter = 0; iter < 400; iter++) {
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i];
        const b = boxes[j];
        if (a.fixed && b.fixed) continue;
        const ox = (a.w + b.w) / 2 + PAD - Math.abs(a.x - b.x);
        const oy = (a.h + b.h) / 2 + PAD - Math.abs(a.y - b.y);
        if (ox <= 0 || oy <= 0) continue;
        const share = a.fixed || b.fixed ? 1 : 0.5;
        if (ox < oy) {
          const d = (a.x < b.x ? -1 : 1) * ox * share;
          if (!a.fixed) a.x += d;
          if (!b.fixed) b.x -= d;
        } else {
          const d = (a.y < b.y ? -1 : 1) * oy * share;
          if (!a.fixed) a.y += d;
          if (!b.fixed) b.y -= d;
        }
      }
    }
    // léger rappel vers la position cible pour garder les éventails compacts
    for (const box of boxes) {
      if (box.fixed) continue;
      box.x += (box.tx - box.x) * 0.02;
      box.y += (box.ty - box.y) * 0.02;
    }
  }

  const minX = Math.min(...boxes.map((b) => b.x - b.w / 2)) - 24;
  const maxX = Math.max(...boxes.map((b) => b.x + b.w / 2)) + 24;
  const minY = Math.min(...boxes.map((b) => b.y - b.h / 2)) - 24;
  const maxY = Math.max(...boxes.map((b) => b.y + b.h / 2)) + 24;

  return {
    viewBox: { x: minX, y: minY, w: maxX - minX, h: maxY - minY },
    groups: groups.map(({ group, base, skills }) => ({
      group,
      base,
      skills: skills.map(({ name, box }) => ({ name, dx: box.x - base.x, dy: box.y - base.y })),
    })),
  };
}

/** Notes affichées pour les compétences qui ne correspondent à aucun projet listé. */
const skillNotes: Record<string, string> = {
  Git: "Tous mes projets sont versionnés avec Git.",
  GitHub: "Mes dépôts publics sont sur github.com/TrackBow.",
  Netlify: "Hébergement de ce portfolio et de son formulaire de contact.",
  Acoustique: "Étudiée pendant ma formation d'ingénieur Audiovisuel et Multimédia.",
  Ollama: "Utilisé pour faire tourner des LLM en local.",
  SQL: "Requêtes et modélisation de bases de données relationnelles.",
  JavaScript: "Le socle de mes projets web, aujourd'hui écrits en TypeScript.",
};

function projectsUsing(skill: string) {
  const s = skill.toLowerCase();
  return projectsData.filter(
    (p) => p.tech.some((t) => t.toLowerCase() === s) || p.category.toLowerCase() === s
  );
}

type Offset = { x: number; y: number };

export function Stack() {
  const [focus, setFocus] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [offsets, setOffsets] = useState<Record<string, Offset>>({});
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ id: string; startX: number; startY: number; origin: Offset; moved: boolean } | null>(null);

  const { viewBox, groups: layout } = useMemo(computeLayout, []);

  const selectedGroupId = selectedSkill
    ? skillGroups.find((g) => g.skills.includes(selectedSkill))?.id ?? null
    : null;
  const activeGroup = focus ?? selectedGroupId;

  /* ---------- Interactions ---------- */

  const toggleGroup = (id: string) => {
    setSelectedSkill(null);
    setFocus((current) => (current === id ? null : id));
  };

  const selectSkill = (name: string, groupId: string) => {
    setFocus(groupId);
    setSelectedSkill((current) => (current === name ? null : name));
  };

  const onKey = (e: KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  const toSvgScale = () => {
    const svg = svgRef.current;
    return svg ? viewBox.w / svg.getBoundingClientRect().width : 1;
  };

  const onPointerDown = (e: ReactPointerEvent, id: string) => {
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    drag.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origin: offsets[id] ?? { x: 0, y: 0 },
      moved: false,
    };
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const scale = toSvgScale();
    const dx = (e.clientX - d.startX) * scale;
    const dy = (e.clientY - d.startY) * scale;
    if (!d.moved && Math.hypot(dx, dy) < 4) return;
    d.moved = true;
    setOffsets((prev) => ({ ...prev, [d.id]: { x: d.origin.x + dx, y: d.origin.y + dy } }));
  };

  const onPointerUp = (id: string) => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved) toggleGroup(id);
  };

  const reset = () => {
    setOffsets({});
    setFocus(null);
    setSelectedSkill(null);
  };

  /* ---------- Panneau de détail ---------- */

  const detail = (() => {
    if (selectedSkill) {
      const used = projectsUsing(selectedSkill);
      return (
        <>
          <h3 className="stack-detail-title">{selectedSkill}</h3>
          {used.length > 0 ? (
            <>
              <p className="stack-detail-text">
                Utilisé dans {used.length} projet{used.length > 1 ? "s" : ""} :
              </p>
              <ul className="stack-detail-projects">
                {used.map((p) => (
                  <li key={p.id}>
                    <a href={`#projet-${p.id}`} className="text-link">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="stack-detail-text">{skillNotes[selectedSkill] ?? "Pas encore de projet public dédié."}</p>
          )}
        </>
      );
    }
    if (activeGroup) {
      const group = skillGroups.find((g) => g.id === activeGroup)!;
      return (
        <>
          <h3 className="stack-detail-title">{group.label}</h3>
          <p className="stack-detail-text">{group.blurb}</p>
          <p className="stack-detail-hint">Choisissez une compétence pour voir où je l'ai utilisée.</p>
        </>
      );
    }
    return (
      <>
        <h3 className="stack-detail-title">Explorer</h3>
        <p className="stack-detail-text">
          Cliquez sur une catégorie pour la mettre en avant, puis sur une compétence pour voir les
          projets où je l'ai utilisée. Vous pouvez aussi faire glisser les catégories.
        </p>
      </>
    );
  })();

  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Stack technique</h2>
          <button type="button" className="btn btn-small" onClick={reset}>
            Réinitialiser
          </button>
        </div>

        <div className="stack-layout">
          {/* ---- Graphe (desktop / tablette) ---- */}
          <svg
            ref={svgRef}
            className="stack-graph"
            viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
            role="group"
            aria-label="Graphe des compétences"
            onPointerMove={onPointerMove}
          >
            {layout.map(({ group, base, skills }) => {
              const off = offsets[group.id] ?? { x: 0, y: 0 };
              const gx = base.x + off.x;
              const gy = base.y + off.y;
              const dimmed = activeGroup !== null && activeGroup !== group.id;
              const isActive = activeGroup === group.id;
              const labelW = pillWidth(group.label, GROUP_FONT) + 8;

              return (
                <g key={group.id} className={`stack-cluster${dimmed ? " is-dimmed" : ""}${isActive ? " is-active" : ""}`}>
                  <line x1={CENTER.x} y1={CENTER.y} x2={gx} y2={gy} className="edge edge-main" />
                  {skills.map((s) => (
                    <line key={s.name} x1={gx} y1={gy} x2={gx + s.dx} y2={gy + s.dy} className="edge" />
                  ))}

                  {skills.map((s) => {
                    const w = pillWidth(s.name, SKILL_FONT);
                    const selected = selectedSkill === s.name;
                    return (
                      <g
                        key={s.name}
                        transform={`translate(${gx + s.dx} ${gy + s.dy})`}
                        className={`node node-skill${selected ? " is-selected" : ""}`}
                        role="button"
                        tabIndex={dimmed ? -1 : 0}
                        aria-pressed={selected}
                        onClick={() => selectSkill(s.name, group.id)}
                        onKeyDown={(e) => onKey(e, () => selectSkill(s.name, group.id))}
                      >
                        <rect x={-w / 2} y={-PILL_H / 2} width={w} height={PILL_H} rx={PILL_H / 2} />
                        <text textAnchor="middle" dy="0.35em">
                          {s.name}
                        </text>
                      </g>
                    );
                  })}

                  <g
                    transform={`translate(${gx} ${gy})`}
                    className="node node-group"
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onPointerDown={(e) => onPointerDown(e, group.id)}
                    onPointerUp={() => onPointerUp(group.id)}
                    onKeyDown={(e) => onKey(e, () => toggleGroup(group.id))}
                  >
                    <rect x={-labelW / 2} y={-GROUP_H / 2} width={labelW} height={GROUP_H} rx={GROUP_H / 2} />
                    <text textAnchor="middle" dy="0.35em">
                      {group.label}
                    </text>
                  </g>
                </g>
              );
            })}

            <g transform={`translate(${CENTER.x} ${CENTER.y})`} className="node node-center">
              <circle r={52} />
              <text textAnchor="middle" dy="-0.2em">
                Ma
              </text>
              <text textAnchor="middle" dy="1em">
                stack
              </text>
            </g>
          </svg>

          {/* ---- Liste (mobile) ---- */}
          <div className="stack-list">
            {skillGroups.map((group) => (
              <div key={group.id} className="stack-list-group">
                <h3 className="stack-list-title">{group.label}</h3>
                <div className="chips">
                  {group.skills.map((name) => (
                    <button
                      key={name}
                      type="button"
                      className={`chip${selectedSkill === name ? " is-selected" : ""}`}
                      aria-pressed={selectedSkill === name}
                      onClick={() => selectSkill(name, group.id)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
                {selectedGroupId === group.id && <div className="stack-detail stack-detail-inline">{detail}</div>}
              </div>
            ))}
          </div>

          <aside className="stack-detail stack-detail-side" aria-live="polite">
            {detail}
          </aside>
        </div>
      </div>
    </section>
  );
}
