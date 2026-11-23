import { useEffect, useState } from 'react'
import { CALENDLY, NAV, type AnchorBase } from '../lib/links'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { CloseIcon, MenuIcon } from './ui/Icons'

export function Header({ base = '' }: { base?: AnchorBase }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = 'rounded px-1 py-1 text-base font-medium text-slate-700 hover:text-primary-dark'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href={`${base}#inicio`} className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/images/logo-era-de-ia.png" alt="ERA de IA" width={2423} height={1126} className="h-10 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`${base}#${n.id}`} className={link}>
              {n.label}
            </a>
          ))}
          <Button href={CALENDLY} className="!px-5 !py-2 text-sm">
            Agenda una llamada
          </Button>
        </nav>
        <button
          type="button"
          className="rounded p-2 text-ink md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {NAV.map((n) => (
              <a key={n.id} href={`${base}#${n.id}`} className={`${link} py-2`} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <Button href={CALENDLY} className="mt-2">
              Agenda una llamada
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
