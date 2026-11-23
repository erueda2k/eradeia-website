import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { CheckIcon } from '../ui/Icons'
import { SectionHeading } from '../ui/SectionHeading'

const SERVICIOS = [
  {
    titulo: 'Automatización de Procesos',
    items: ['Integraciones con herramientas existentes', 'Eliminación de tareas manuales', 'Flujos de trabajo optimizados'],
  },
  {
    titulo: 'Atención al Cliente con IA',
    items: ['Chatbots inteligentes', 'Respuestas automáticas', 'Soporte 24/7 sin contratar más personal'],
  },
  {
    titulo: 'Ventas Inteligentes',
    items: ['Calificación automática de prospectos', 'Seguimiento automático', 'Respuestas inteligentes y rápidas'],
  },
  {
    titulo: 'Entrenamiento para Equipos',
    items: ['Capacitación práctica en IA', 'Manuales y flujos personalizados', 'Acompañamiento continuo'],
  },
]

export function Servicios() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-card py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="servicios-titulo"
          title="Servicios que ofrezco"
          intro="Soluciones prácticas de IA adaptadas a las necesidades reales de tu negocio."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((s) => (
            <article key={s.titulo} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">{s.titulo}</h3>
              <ul className="mt-4 space-y-3 text-muted">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary-dark" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="#contacto">Hablar sobre tu caso</Button>
        </div>
      </Container>
    </section>
  )
}
