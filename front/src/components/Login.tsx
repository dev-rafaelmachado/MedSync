'use client'

import { useFormContext } from 'react-hook-form'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {
  title: string
}

export const Login = ({ title }: Props) => {
  const { register } = useFormContext()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1 className="mb-4 text-xl">{title}</h1>
      <Input {...register('email')} type="email" placeholder="E-mail" />
      <Input {...register('password')} type="password" placeholder="Senha" />
      <Button className="mt-4 w-2/4" type="submit">
        Entrar
      </Button>
    </div>
  )
}
