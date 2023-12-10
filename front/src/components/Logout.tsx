'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useEffect } from 'react'

interface Props {
  name: string
}

export const Logout = ({ name }: Props) => {
  const router = useRouter()
  useEffect(() => {
    const id = localStorage.getItem(`${name}Id`)
    if (!id) {
      router.push(`/${name}`)
    }
  }, [name, router])
  return (
    <Button
      className="absolute right-0 top-0 text-red-700"
      variant="link"
      onClick={() => {
        localStorage.removeItem(`${name}Id`)
        router.push(`/${name}`)
      }}
    >
      Sair
    </Button>
  )
}
