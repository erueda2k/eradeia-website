import { Header } from './components/Header'
import { Contacto } from './components/sections/Contacto'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { PorQueIA } from './components/sections/PorQueIA'
import { Proceso } from './components/sections/Proceso'
import { Resultados } from './components/sections/Resultados'
import { Servicios } from './components/sections/Servicios'
import { SobreMi } from './components/sections/SobreMi'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PorQueIA />
        <Servicios />
        <Proceso />
        <Resultados />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
