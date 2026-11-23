interface Props {
  id: string
  title: string
  intro?: string
  light?: boolean
}

export function SectionHeading({ id, title, intro, light = false }: Props) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 id={id} className={`text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${light ? 'text-slate-300' : 'text-muted'}`}>{intro}</p>}
    </div>
  )
}
