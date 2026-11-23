export const CALENDLY = 'https://calendly.com/erueda2k/30min'
export const WHATSAPP = 'https://wa.me/573106180108'
export const LINKEDIN = 'https://www.linkedin.com/in/emiliorueda'
export const EMAIL = 'mailto:emilio.rueda@eradeia.com'
export const HISTORIA = '/conocer-mi-historia/'

export const NAV = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Sobre Mí', id: 'sobre-mi' },
  { label: 'Contacto', id: 'contacto' },
] as const

/** Prefijo para anclas: '' en la home, '/' en otras páginas. */
export type AnchorBase = '' | '/'

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}
