'use client'

import { IGetDoctorByIdDTO } from '@/types/doctor/IGetDoctorByIdDTO'
import { IGetSpecialtyByIdDTO } from '@/types/specialty/IGetSpecialtyByIdDTO'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog'

import { useForm } from 'react-hook-form'
import { DatePicker } from '../form/components/DatePicker'
import { SelectInput } from '../form/components/SelectInput'
import { Form } from '../ui/form'
import api from '@/utils/api'
import toast from 'react-hot-toast'
import { useAppointments } from '@/contexts/AppointmentsContext'
import { Appointment } from '../PatientAppointments'
import { v4 as uuidV4 } from 'uuid'
import { useState } from 'react'

interface Props {
  doctors: IGetDoctorByIdDTO[]
  specialty: IGetSpecialtyByIdDTO[]
}

interface FormData {
  specialty: string
  doctor: string
  date: string
}

export const Marker = ({ doctors, specialty }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const form = useForm<FormData>()
  const { setAppointments } = useAppointments()
  const { watch, handleSubmit } = form

  const specialtyId = watch('specialty')

  const onSubmit = async (data: FormData) => {
    try {
      const patientId = localStorage.getItem('beneficiaryId')
      await api.post('/v1/appointment', {
        patientId,
        doctorId: data.doctor,
        date: data.date,
      })
      const appointment: Appointment = {
        id: uuidV4(),
        date: data.date,
        doctorName:
          doctors.find((doctor) => doctor.id === data.doctor)?.name || '',
        doctorSpecialty:
          specialty.find((specialty) => specialty.id === data.specialty)
            ?.name || '',
      }
      setAppointments((prev) => [...prev, appointment])
      setOpen(false)
      toast.success('Consulta marcada com sucesso')
    } catch (error) {
      toast.error('Erro ao marcar consulta')
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Marcar Consulta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Marcar Consulta</DialogTitle>
          <DialogDescription>
            Para marcar uma consulta, preencha os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <SelectInput
              name="specialty"
              label="Selecione a especialidade"
              placeholder="Ortopedista..."
              options={specialty.map((specialty) => {
                return { value: specialty.id, label: specialty.name }
              })}
            />
            <SelectInput
              name="doctor"
              label="Selecione o médico"
              placeholder="Dr. Fulano.."
              disabled={!specialtyId}
              options={doctors
                .map((doctor) => {
                  return {
                    value: doctor.id,
                    label: doctor.name,
                    specialty: doctor.specialtyId,
                  }
                })
                .filter((doctor) => {
                  return doctor.specialty === specialtyId
                })}
            />
            <DatePicker name={'date'} />
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
