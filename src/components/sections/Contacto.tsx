import { CALENDLY, WHATSAPP } from '../../lib/links'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-primary-dark py-16 text-center sm:py-24">
      <Container className="max-w-3xl">
        <h2 id="contacto-titulo" className="text-3xl font-bold text-white sm:text-4xl">
          ¿Listo para modernizar tu negocio con IA?
        </h2>
        <p className="mt-4 text-lg text-teal-50">
          Agenda una llamada gratuita de 20 minutos y descubre cómo la inteligencia artificial puede transformar tu
          empresa.
        </p>
        <div className="mt-8">
          <Button href={CALENDLY} variant="light">
            Agenda tu llamada gratuita
          </Button>
        </div>
        <p className="mt-6 text-teal-50">
          O contáctame por WhatsApp:{' '}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline underline-offset-4 hover:text-accent"
          >
            +57 310 618 0108
          </a>
        </p>
      </Container>
    </section>
  )
}
