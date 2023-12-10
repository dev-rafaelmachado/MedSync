'use client'

import { Back } from '@/components/Back'
import { Login } from '@/components/Login'
import { IResponseLoginDTO } from '@/types/doctor/IResponseLoginDTO'
import api from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Form {
  email: string
  password: string
}

export const DoctorWrapped = () => {
  const methods = useForm<Form>()
  const router = useRouter()

  const { handleSubmit } = methods

  useEffect(() => {
    const doctorId = localStorage.getItem('doctorId')
    if (doctorId) {
      router.push('/doctor/home')
    }
  }, [router])

  const onSubmit = (data: Form) => {
    api
      .post('v1/doctor/login', data)
      .then((response) => {
        const data: IResponseLoginDTO = response.data
        localStorage.setItem('doctorId', data.id)
        router.push(`/doctor/home/${data.id}`)
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
        <Login title="Portal do Médico" />
      </form>
    </FormProvider>
  )
}
