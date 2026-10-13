import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL = "cottelthibault3@gmail.com";

const links = [
  { label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: "thibault-cottel", href: "https://linkedin.com/in/thibault-cottel" },
  { label: "GitHub", value: "TrackBow", href: "https://github.com/TrackBow" },
  { label: "CV", value: "Télécharger (PDF)", href: "/20260727_CV_Thibault.pdf" },
];

/**
 * Formulaire envoyé via Netlify Forms (aucun backend à écrire).
 * Netlify détecte le formulaire "contact" déclaré dans index.html ;
 * les messages arrivent dans le tableau de bord Netlify et peuvent être
 * transférés par e-mail (Site configuration > Notifications > Form submission notifications).
 */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Me contacter</h2>
          <p className="contact-lead">
            Une offre, un projet ou une question ? Écrivez-moi ici, le message arrive directement dans ma boîte mail.
          </p>
          <dl className="contact-links">
            {links.map((link) => (
              <div key={link.label} className="contact-link-row">
                <dt>{link.label}</dt>
                <dd>
                  <a
                    href={link.href}
                    className="text-link"
                    {...(link.href.startsWith("http") || link.href.endsWith(".pdf")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {status === "sent" ? (
          <div className="form-done" role="status">
            <h3>Message envoyé</h3>
            <p>Merci ! Je vous réponds dès que possible à l'adresse indiquée.</p>
            <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
              Écrire un autre message
            </button>
          </div>
        ) : (
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="visually-hidden">
              <label>
                Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="field-row">
              <label className="field">
                <span>Nom</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label className="field">
                <span>E-mail</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
            </div>
            <label className="field">
              <span>Objet</span>
              <input type="text" name="subject" placeholder="Offre de poste, projet, question…" />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows={6} required />
            </label>

            {status === "error" && (
              <p className="form-error" role="alert">
                L'envoi a échoué. Réessayez, ou écrivez-moi directement à{" "}
                <a href={`mailto:${EMAIL}`} className="text-link">
                  {EMAIL}
                </a>
                .
              </p>
            )}

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
