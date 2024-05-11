'use client'

import { IGetRequestById } from '@/types/requests/IGetRequestById'
import api from '@/utils/api'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { DataTable } from './Table'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'

interface Props {
  IRequests: IGetRequestById[]
}

export type Request = {
  id: string
  date: string
  appointmentId: string
  doctorName: string
  patientName: string
}

export const Requests = ({ IRequests }: Props) => {
  const defaultRequests: Request[] = useMemo(() => {
    const requests = IRequests.map((request) => {
      return {
        id: request.id,
        date: request.appointment.date,
        appointmentId: request.appointmentId,
        doctorName: request.appointment.Doctor.name,
        patientName: request.appointment.Patient.name,
      }
    })
    return requests
  }, [IRequests])

  const [requests, setRequests] = useState<Request[]>(defaultRequests)
  const adminId = localStorage.getItem('adminId')
  const columns: ColumnDef<Request>[] = [
    {
      header: 'Data',
      accessorKey: 'date',
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
      header: 'Nome do Médico',
      accessorKey: 'doctorName',
    },
    {
      header: 'Nome do Paciente',
      accessorKey: 'patientName',
    },
    {
      header: 'Ações',
      accessorKey: 'id',
      cell: ({ row }) => {
        const { appointmentId, id } = row.original
        console.log(`/v1/appointment/${appointmentId}`)
        const aproveRequest = async (appointmentId: string, id: string) => {
          try {
            await api.delete(`/v1/request/${id}`)
            await api.delete(`/v1/appointment/${appointmentId}`, {
              headers: {
                adminid: adminId,
              },
            })
            setRequests((prev) => {
              return prev.filter((request) => request.id !== id)
            })
            toast.success('Consulta apagada com sucesso!')
          } catch (error) {
            console.error(error)
            toast.error('Erro ao apagar consulta!')
          }
        }

        return (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
                Aprovar
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Está ação não pode ser desfeita. Essa consulta será apagada
                  permanentemente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => aproveRequest(appointmentId, id)}
                >
                  Confirmar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      },
    },
  ]
  return <DataTable columns={columns} data={requests} />
}
