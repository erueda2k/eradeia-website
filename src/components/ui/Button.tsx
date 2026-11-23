import type { AnchorHTMLAttributes } from 'react'
import { isExternal } from '../../lib/links'

type Variant = 'primary' | 'secondary' | 'light'

const styles: Record<Variant, string> = {
  primary: 'bg-primary-dark text-white hover:bg-teal-800 shadow-sm',
  secondary: 'border-2 border-primary-dark text-primary-dark hover:bg-secondary',
  light: 'bg-white text-ink hover:bg-secondary',
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
}

export function Button({ href, variant = 'primary', className = '', children, ...rest }: Props) {
  const external = isExternal(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
