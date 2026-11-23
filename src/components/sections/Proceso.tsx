import { CALENDLY } from '../../lib/links'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const PASOS = [
  {
    titulo: '1. Diagnóstico (20–30 min)',
    texto:
      'Revisamos tu proceso y elegimos 1 caso de uso con impacto: ahorro de tiempo, menos costos o mejor seguimiento comercial.',
  },
  {
    titulo: '2. Implementación rápida',
    texto:
      'Configuro la solución y la conecto a tus herramientas (WhatsApp, email, formularios o CRM). Entregas claras y medibles.',
  },
  {
    titulo: '3. Entrenamiento y control',
    texto:
      'Dejo guías simples para tu equipo, controles básicos y soporte inicial para asegurar adopción sin depender de mí.',
  },
]

export function Proceso() {
  return (
    <section aria-labelledby="proceso" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="proceso"
          title="Así lo implementamos sin fricción"
          intro="En 3 pasos: identificamos el caso de uso, lo implementamos rápido y dejamos a tu equipo operando con confianza."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PASOS.map((p) => (
            <article key={p.titulo} className="rounded-2xl border border-slate-200 bg-card p-8">
              <h3 className="text-xl font-semibold text-primary-dark">{p.titulo}</h3>
              <p className="mt-3 text-muted">{p.texto}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={CALENDLY}>Agenda tu diagnóstico</Button>
          <p className="mt-4 text-muted">Sin compromiso. Saldrás con un plan claro de próximos pasos.</p>
        </div>
      </Container>
    </section>
  )
}
