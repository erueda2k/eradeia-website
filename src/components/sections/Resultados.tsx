import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const RESULTADOS = [
  {
    cifra: '30–60%',
    titulo: 'Menos tiempo en tareas repetitivas',
    texto: 'Automatización de seguimiento, reportes y registros',
  },
  {
    cifra: '10–30h',
    titulo: 'Horas liberadas al mes',
    texto: 'En backoffice, atención o coordinación comercial',
  },
  {
    cifra: '10–25%',
    titulo: 'Mejor conversión por seguimiento',
    texto: 'Respuestas más rápidas y menos leads olvidados',
  },
]

export function Resultados() {
  return (
    <section aria-labelledby="resultados" className="bg-ink py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="resultados"
          light
          title="Resultados típicos cuando aplicas IA bien"
          intro="Los rangos dependen del proceso y la disciplina de uso. En la llamada te estimo un escenario real para tu caso."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {RESULTADOS.map((r) => (
            <article key={r.cifra} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <p className="font-display text-5xl font-bold text-accent">{r.cifra}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{r.titulo}</h3>
              <p className="mt-2 text-slate-300">{r.texto}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-300">
          Nota: Estos resultados son rangos habituales observados en proyectos similares. En tu diagnóstico definimos el
          objetivo y la métrica exacta.
        </p>
      </Container>
    </section>
  )
}
