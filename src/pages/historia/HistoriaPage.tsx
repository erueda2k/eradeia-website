import { Header } from '../../components/Header'
import { Footer } from '../../components/sections/Footer'
import { Button } from '../../components/ui/Button'
import { Container } from '../../components/ui/Container'
import { CheckIcon } from '../../components/ui/Icons'

const CONTACTO = '/#contacto'

const LOGROS = [
  'Automatización y RPA en producción',
  'Reducción real de costos operativos',
  'Mejora de productividad y experiencia del cliente',
  'Procesos claros y medibles',
]

const LINEA = [
  { titulo: 'Ingeniería y sistemas', texto: 'Automatización y plataformas tecnológicas en entornos exigentes.' },
  { titulo: 'Banca y operaciones', texto: 'Liderazgo ejecutivo, productividad, procesos y grandes equipos.' },
  { titulo: 'Automatización y RPA', texto: 'Robots en producción, reducción de costos y mejora de calidad.' },
  {
    titulo: 'IA aplicada a PyMEs',
    texto: 'Soluciones prácticas, medibles y orientadas a resultados reales.',
    destacado: true,
  },
]

const PASOS = [
  'Analizo tu negocio antes de proponer tecnología',
  'Definimos un caso claro de uso',
  'Implementamos rápido',
  'Medimos resultados',
  'Ajustamos y escalamos',
]

export default function HistoriaPage() {
  return (
    <>
      <Header base="/" />
      <main>
        <Container className="max-w-3xl pt-8">
          <a href="/" className="inline-block rounded py-1 font-medium text-primary-dark hover:underline">
            ← Volver a inicio
          </a>
        </Container>

        <header className="bg-gradient-to-b from-secondary to-white py-12 text-center sm:py-16">
          <Container className="max-w-3xl">
            <h1 className="text-4xl font-bold text-ink sm:text-5xl">Conoce mi historia</h1>
            <p className="mt-4 text-xl text-muted">De ingeniería y banca a IA aplicada para PyMEs</p>
          </Container>
        </header>

        <Container className="max-w-3xl space-y-14 pb-20 text-lg text-muted">
          <section>
            <p>
              No llegué a la inteligencia artificial por moda. Llegué por la necesidad real de resolver problemas
              complejos, mejorar procesos y generar resultados medibles en negocios reales.
            </p>
          </section>

          <section aria-labelledby="ingenieria">
            <h2 id="ingenieria" className="text-3xl font-bold text-ink">
              Ingeniería y sistemas
            </h2>
            <p className="mt-4">
              Soy ingeniero de sistemas de formación. Desde el inicio trabajé en automatización, plataformas
              tecnológicas y sistemas financieros, diseñando soluciones que debían funcionar en entornos exigentes y de
              alto volumen.
            </p>
          </section>

          <section aria-labelledby="transformacion">
            <h2 id="transformacion" className="text-3xl font-bold text-ink">
              25+ años liderando transformación
            </h2>
            <p className="mt-4">
              Durante más de 25 años ocupé roles ejecutivos en sectores como banca, software y servicios, liderando
              equipos desde decenas hasta miles de personas en organizaciones como BBVA y PNC.
            </p>
            <ul className="mt-6 space-y-3">
              {LOGROS.map((l) => (
                <li key={l} className="flex gap-3">
                  <CheckIcon className="mt-1.5 h-5 w-5 shrink-0 text-primary-dark" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Línea de tiempo">
            <ol className="relative space-y-6 border-l-2 border-primary/30 pl-8">
              {LINEA.map((i) => (
                <li key={i.titulo} className="relative rounded-2xl border border-slate-200 bg-card p-6">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[2.6rem] top-8 h-4 w-4 rounded-full border-4 border-white ${
                      i.destacado ? 'bg-primary-dark ring-4 ring-accent' : 'bg-primary-light'
                    }`}
                  />
                  <h3 className="text-xl font-semibold text-ink">{i.titulo}</h3>
                  <p className="mt-2 text-base">{i.texto}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-2xl bg-secondary p-8 text-center">
            <p className="text-ink">Si este recorrido conecta contigo y con los retos de tu empresa, podemos conversar.</p>
            <a
              href={CONTACTO}
              className="mt-4 inline-block rounded font-semibold text-primary-dark underline underline-offset-4 hover:text-teal-900"
            >
              Ver si la IA tiene sentido para tu negocio →
            </a>
          </section>

          <section aria-labelledby="pymes">
            <h2 id="pymes" className="text-3xl font-bold text-ink">
              Por qué hoy trabajo con PyMEs
            </h2>
            <p className="mt-4">
              Las PyMEs necesitan soluciones claras, no discursos técnicos ni promesas vacías. Hoy enfoco mi experiencia
              en ayudar a implementar IA de forma práctica, rentable y sostenible.
            </p>
          </section>

          <section aria-labelledby="como-trabajo">
            <h2 id="como-trabajo" className="text-3xl font-bold text-ink">
              Cómo trabajo hoy
            </h2>
            <ol className="mt-6 space-y-3">
              {PASOS.map((p, n) => (
                <li key={p} className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-dark font-display font-bold text-white"
                  >
                    {n + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="cta" className="rounded-3xl bg-ink p-8 text-center sm:p-12">
            <h3 id="cta" className="text-2xl font-bold text-white sm:text-3xl">
              ¿Hablamos de tu caso?
            </h3>
            <p className="mt-3 text-slate-300">
              Si quieres explorar cómo la IA puede ayudarte de forma realista, conversemos.
            </p>
            <div className="mt-6">
              <Button href={CONTACTO} variant="light">
                Agenda una llamada
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer base="/" />
    </>
  )
}
