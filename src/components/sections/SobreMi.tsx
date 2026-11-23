import { HISTORIA } from '../../lib/links'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { CheckIcon } from '../ui/Icons'

export function SobreMi() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo" className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <img
          src="/images/emilio-rueda-foto.png"
          alt="Emilio Rueda - Consultor de IA"
          width={1024}
          height={1536}
          loading="lazy"
          className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-xl"
        />
        <div>
          <h2 id="sobre-mi-titulo" className="text-3xl font-bold text-ink sm:text-4xl">
            Sobre mí
          </h2>
          <p className="mt-6 text-lg text-muted">
            Soy <strong className="text-ink">Emilio Rueda</strong>. Ayudo a PyMEs a implementar IA de forma práctica:
            automatización, atención al cliente y ventas con mejor seguimiento.
          </p>
          <p className="mt-4 text-lg text-muted">
            He liderado operaciones y transformación en entornos exigentes. Mi enfoque es simple:{' '}
            <span className="font-semibold text-primary-dark">
              casos de uso claros, implementación rápida y resultados medibles
            </span>
            .
          </p>
          <ul className="mt-6 space-y-3 text-muted">
            {[
              'Primero identificamos 1 proceso con impacto (tiempo, costos o ventas).',
              'Lo implemento sin fricción con tus herramientas actuales.',
              'Dejo a tu equipo operando con guías y control básico.',
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary-dark" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={HISTORIA} variant="secondary">
              Conocer mi historia
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
