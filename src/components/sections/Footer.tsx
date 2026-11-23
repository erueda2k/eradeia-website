import { EMAIL, LINKEDIN, NAV, type AnchorBase } from '../../lib/links'
import { Container } from '../ui/Container'
import { LinkedInIcon, MailIcon } from '../ui/Icons'

export function Footer({ base = '' }: { base?: AnchorBase }) {
  const icon = 'rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white'
  return (
    <footer id="contacto-footer" className="bg-ink text-slate-300">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Emilio Rueda</h3>
            <p className="mt-1">Consultor de Inteligencia Artificial</p>
          </div>
          <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <a key={n.id} href={`${base}#${n.id}`} className="rounded hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={icon}>
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href={EMAIL} aria-label="Email" className={icon}>
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-sm">© 2025 Emilio Rueda. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}
