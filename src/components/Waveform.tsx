import { useEffect, useRef } from "react";

/**
 * Onde sonore dessinée en canvas.
 * - Au chargement, le tracé se dessine de gauche à droite (le seul mouvement "automatique" de la page).
 * - Ensuite, l'amplitude gonfle autour du curseur : la souris "excite" le signal.
 * - Respecte prefers-reduced-motion (tracé statique) et se met en pause hors écran.
 */
export function Waveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue("--accent").trim() || "#2e44e8";
    const faint = styles.getPropertyValue("--line").trim() || "#e3e5ea";
    const ghost = styles.getPropertyValue("--accent-ghost").trim() || "#c9cffa";

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    const start = performance.now();
    let mouseX = -1;
    let energy = 0;
    let targetEnergy = 0;

    const signal = (u: number, t: number, phase: number) =>
      0.5 * Math.sin(u * 17 + t * 0.0011 + phase) +
      0.3 * Math.sin(u * 43 - t * 0.0019 + phase * 2) +
      0.2 * Math.sin(u * 97 + t * 0.0031);

    const draw = (now: number) => {
      const t = reduceMotion ? 0 : now - start;
      const progress = reduceMotion ? 1 : Math.min(1, t / 1600);
      const reveal = 1 - Math.pow(1 - progress, 3);
      energy += (targetEnergy - energy) * 0.06;

      ctx.clearRect(0, 0, width, height);
      const mid = height / 2;

      // Axe horizontal
      ctx.strokeStyle = faint;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(width, mid);
      ctx.stroke();

      const drawLine = (phase: number, scale: number, color: string, lineWidth: number) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = "round";
        ctx.beginPath();
        const end = width * reveal;
        for (let x = 0; x <= end; x += 2) {
          const u = x / width;
          const envelope = Math.pow(Math.sin(Math.PI * u), 1.4);
          const bump =
            mouseX >= 0 ? Math.exp(-((x - mouseX) ** 2) / (2 * 70 * 70)) * energy : 0;
          const amp = height * 0.3 * scale * envelope * (0.8 + 1.4 * bump);
          const y = mid + signal(u, t, phase) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      drawLine(1.7, 0.75, ghost, 1);
      drawLine(0, 1, accent, 1.75);
    };

    const loop = (now: number) => {
      draw(now);
      if (running) raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion || !running) draw(performance.now());
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      const inside = e.clientY > rect.top - 160 && e.clientY < rect.bottom + 160;
      targetEnergy = inside ? 1 : 0;
    };
    const onLeave = () => {
      targetEnergy = 0;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      return () => window.removeEventListener("resize", resize);
    }

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    observer.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="waveform" aria-hidden="true" />;
}
