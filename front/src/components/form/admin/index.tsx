'use client'

import { Back } from '@/components/Back'
import { Login } from '@/components/Login'
import { IResponseLoginDTO } from '@/types/admin/IResponseLoginDTO'
import api from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Form {
  email: string
  password: string
}

export const AdminWrapped = () => {
  const methods = useForm<Form>()
  const router = useRouter()

  const { handleSubmit } = methods

  useEffect(() => {
    const adminId = localStorage.getItem('adminId')
    if (adminId) {
      router.push(`/admin/home/${adminId}`)
    }
  }, [router])

  const onSubmit = (data: Form) => {
    api
      .post('v1/admin/login', data)
      .then((response) => {
        const data: IResponseLoginDTO = response.data
        localStorage.setItem('adminId', data.id)
        router.push(`/admin/home/${data.id}`)
      })
      .catch((error) => {
        console.log(error)
        toast.error('Erro ao fazer login, tente novamente.')
      })
  }

  return (
    <FormProvider {...methods}>
      <Back />
      <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full">
        <Login title="Portal do Administrador" />
      </form>
    </FormProvider>
  )
}
