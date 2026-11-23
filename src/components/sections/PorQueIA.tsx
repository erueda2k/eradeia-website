import { Container } from '../ui/Container'
import { ChartIcon, ClockIcon, UsersIcon } from '../ui/Icons'
import { SectionHeading } from '../ui/SectionHeading'

const BENEFICIOS = [
  {
    Icon: ClockIcon,
    titulo: 'Ahorro de Tiempo',
    texto: 'Automatiza tareas repetitivas y libera horas cada semana para enfocarte en lo que realmente importa.',
  },
  {
    Icon: UsersIcon,
    titulo: 'Mejor Atención al Cliente',
    texto: 'Implementa chatbots y flujos automáticos que responden 24/7 sin aumentar tu equipo.',
  },
  {
    Icon: ChartIcon,
    titulo: 'Más Ventas',
    texto:
      'Usa IA para calificar prospectos, responder según intención de compra y dar seguimiento automático a cada oportunidad.',
  },
]

export function PorQueIA() {
  return (
    <section aria-labelledby="por-que-ia" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="por-que-ia"
          title="¿Por qué IA para tu negocio?"
          intro="La inteligencia artificial no es solo para grandes empresas. Descubre cómo puede transformar tu PyME."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFICIOS.map(({ Icon, titulo, texto }) => (
            <article key={titulo} className="rounded-2xl border border-slate-200 bg-card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary-dark">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{titulo}</h3>
              <p className="mt-2 text-muted">{texto}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
