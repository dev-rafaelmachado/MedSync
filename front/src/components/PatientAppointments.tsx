'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IGetAppointmentsById } from '@/types/appointments/IGetAppointmentsById'
import { DataTable } from './Table'
import { useEffect, useMemo } from 'react'
import { useAppointments } from '@/contexts/AppointmentsContext'

interface Props {
  patientAppointments: IGetAppointmentsById[]
}

export type Appointment = {
  id: string
  date: string
  doctorName: string
  doctorSpecialty: string
}

export const PatientAppointments = ({ patientAppointments }: Props) => {
  const { setAppointments, appointments } = useAppointments()

  const columns: ColumnDef<Appointment>[] = [
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
      accessorKey: 'doctorName',
      header: 'Nome do médico',
      size: 3,
    },
    {
      accessorKey: 'doctorSpecialty',
      header: 'Especialidade',
      size: 3,
    },
    // {
    //   accessorKey: 'id',
    //   header: 'Ações',
    //   cell: ({ row }) => {
    //     const { id } = row.original
    //     const deleteAppointment = async (id: string) => {
    //       try {
    //         await api.delete(`v1/appointment/${id}`, {
    //           headers: {
    //             adminid: `26661186-5cba-4f9c-98a3-16b5d6063a94`,
    //           },
    //         })
    //         setAppointments((prev) => {
    //           return prev.filter((appointment) => appointment.id !== id)
    //         })
    //         toast.success('Consulta excluída com sucesso!')
    //       } catch (error) {
    //         console.error('Erro ao excluir compromisso:', error)
    //         toast.error('Erro ao excluir consulta!')
    //       }
    //     }
    //     return (
    //       <div>
    //         <button
    //           className="btn btn-primary"
    //           onClick={() => deleteAppointment(id)}
    //         >
    //           Deletar
    //         </button>
    //       </div>
    //     )
    //   },
    // },
  ]

  const Appointments = useMemo(() => {
    return patientAppointments.map((appointment) => {
      return {
        id: appointment.id,
        date: appointment.date,
        doctorName: appointment.Doctor.name,
        doctorSpecialty: appointment.Doctor.specialty.name,
      }
    })
  }, [patientAppointments])

  useEffect(() => {
    setAppointments(Appointments)
  }, [Appointments, setAppointments])

  return <DataTable columns={columns} data={appointments} />
}
