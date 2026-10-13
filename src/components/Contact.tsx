const EMAIL = "cottelthibault3@gmail.com";

const links = [
  { label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: "thibault-cottel", href: "https://linkedin.com/in/thibault-cottel" },
  { label: "GitHub", value: "TrackBow", href: "https://github.com/TrackBow" },
  { label: "CV", value: "Télécharger (PDF)", href: "/20260727_CV_Thibault.pdf" },
];

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Me contacter</h2>
          <p className="contact-lead">
            Une offre, un projet ou une question ? Le plus simple est de m'écrire par e-mail.
          </p>
          <a className="btn btn-primary contact-cta" href={`mailto:${EMAIL}`}>
            M'écrire un e-mail
          </a>
        </div>

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
    </section>
  );
}
