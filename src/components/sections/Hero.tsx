import { CALENDLY } from '../../lib/links'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const EMPRESAS = ['BBVA', 'Bancolombia', 'Davivienda', 'SURA', 'Ecopetrol', 'Rappi']

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-secondary to-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary-dark shadow-sm ring-1 ring-primary/20">
            ✨ IA práctica para pequeñas y medianas empresas
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Inteligencia Artificial aplicada a tu negocio
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Te ayudo a automatizar procesos, reducir costos y vender mejor usando IA de forma simple y segura.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={CALENDLY}>Agenda una llamada gratis</Button>
            <Button href="#servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-sm font-medium text-muted">Empresas que ya confían en soluciones de IA</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-lg font-semibold text-slate-500">
              {EMPRESAS.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="/images/hero-ia-negocio.jpg"
          alt="Inteligencia Artificial para negocios"
          width={1024}
          height={1024}
          fetchPriority="high"
          className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-xl lg:max-w-lg"
        />
      </Container>
    </section>
  )
}
