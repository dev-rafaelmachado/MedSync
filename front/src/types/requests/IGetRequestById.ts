import { IGetAppointmentsById } from '../appointments/IGetAppointmentsById'

export interface IGetRequestById {
  id: string
  appointmentId: string
  createdAt: string
  updatedAt: string
  appointment: IGetAppointmentsById
}
