import Image from 'next/image'
import Link from 'next/link'

export const Back = () => {
  return (
    <Link href={'/'} className="absolute left-2 top-2 cursor-pointer">
      <Image src={'/back.svg'} alt="back" width={30} height={30} />
    </Link>
  )
}
