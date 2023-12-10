'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IGetAppointmentsById } from '@/types/appointments/IGetAppointmentsById'
import { DataTable } from './Table'
import { useMemo, useState } from 'react'
import api from '@/utils/api'

interface Props {
  appointments: IGetAppointmentsById[]
}

export type DoctorAppointment = {
  id: string
  date: string
  patientName: string
  isRequested: boolean
}

export const DoctorAppointments = ({ appointments }: Props) => {
  const useMemorizedAppointments: DoctorAppointment[] = useMemo(() => {
    const doctorAppointments = appointments.map((appointment) => {
      return {
        id: appointment.id,
        date: appointment.date,
        patientName: appointment.Patient.name,
        isRequested: false,
      }
    })
    return doctorAppointments
  }, [appointments])

  const [doctorAppointments, setDoctorAppointments] = useState<
    DoctorAppointment[]
  >(useMemorizedAppointments)

  const columns: ColumnDef<DoctorAppointment>[] = [
    {
      accessorKey: 'date',
      header: 'Data',
      cell: ({ row }) => {
        const { date } = row.original
        return (
          <div>
            {new Date(date).toLocaleDateString(undefined, {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              timeZone: 'UTC',
            })}
          </div>
        )
      },
    },
    {
      accessorKey: 'patientName',
      header: 'Nome do Paciente',
      size: 3,
      cell: ({ row }) => {
        const { patientName } = row.original
        return <div>{patientName}</div>
      },
    },
    {
      accessorKey: 'id',
      header: 'Ações',
      cell: ({ row }) => {
        const { id } = row.original
        const deleteAppointment = async (id: string) => {
          try {
            await api.post(`/v1/request`, {
              appointmentId: id,
            })
            setDoctorAppointments((prev) => {
              return prev.map((appointment) => {
                if (appointment.id === id) {
                  return {
                    ...appointment,
                    isRequested: true,
                  }
                }
                return appointment
              })
            })
          } catch (error) {
            console.error(error)
          }
        }
        return (
          <div>
            <button
              data-requested={row.original.isRequested}
              className="btn btn-primary text-orange-400 data-[requested=true]:text-zinc-400"
              onClick={() => deleteAppointment(id)}
              disabled={row.original.isRequested}
            >
              {row.original.isRequested
                ? 'Desmarque requisitado'
                : 'Requisitar desmarque'}
            </button>
          </div>
        )
      },
    },
  ]

  return <DataTable columns={columns} data={doctorAppointments} />
}
