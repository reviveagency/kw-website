import Link from "next/link";
import Image from "next/image";
import { LINKS } from "@/lib/links";

const FOOTER_LINKS = [
  { label: "Preços", href: "#precos" },
  { label: "Marcar sessão", href: LINKS.booking, external: true },
  { label: "Grupos", href: "#grupos" },
  { label: "Contactos", href: "#contactos" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 pb-24 lg:pb-12 pt-16">
      <div className="container-page">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Image
              src="/images/kiro-logo.png"
              alt="KIRO Karting"
              width={229}
              height={221}
              className="h-12 w-auto"
            />
            <p className="text-sm text-ink-muted mt-5 max-w-md">
              Bombarral, Portugal.
            </p>
            <p className="text-sm text-ink-faint mt-2 max-w-md">
              Website concept by{" "}
              <Link
                href="https://reviveagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline-offset-4 hover:underline"
              >
                Revive
              </Link>
              .
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm text-ink-muted">Navegação</div>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm text-ink-muted">Contacto</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-ink"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href={LINKS.phone}
                  className="text-ink-muted hover:text-ink"
                >
                  Ligar agora
                </Link>
              </li>
              <li>
                <Link
                  href={LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-ink"
                >
                  Direções
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 pt-8 border-t border-white/8 text-xs text-ink-faint max-w-3xl leading-relaxed">
          Conceito visual e funcional criado para fins de apresentação.
          Conteúdos, preços, links e media finais a confirmar com a equipa
          KIRO.
        </p>
      </div>
    </footer>
  );
}
