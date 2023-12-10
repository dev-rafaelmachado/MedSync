import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface Props {
  title: string
  bgImage: string
  link: string
}

export const Section = ({ title, bgImage, link }: Props) => {
  return (
    <section
      className={twMerge(
        ' flex h-full w-1/3 bg-cover bg-center  transition-all duration-500 hover:w-2/4',
        bgImage,
      )}
    >
      <div className="h-full w-full backdrop-brightness-50">
        <Link
          className="flex h-full w-full items-center justify-center"
          href={`${link}`}
        >
          <h1 className="text-4xl font-bold text-zinc-100">{title}</h1>
        </Link>
      </div>
    </section>
  )
}
