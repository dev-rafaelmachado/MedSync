import { ICreateAppointmentDTO } from '../dto/ICreateAppointmentDTO'
import { IGetAppointmentDTO } from '../dto/IGetAppointmentByIdDTO'

export interface IAppointmentRepository {
  create(appointment: ICreateAppointmentDTO): Promise<IGetAppointmentDTO>
  findById(id: string): Promise<IGetAppointmentDTO | undefined>
  list(): Promise<IGetAppointmentDTO[]>
  findByDoctorId(doctorId: string): Promise<IGetAppointmentDTO[]>
  findByPatientId(patientId: string): Promise<IGetAppointmentDTO[]>
  delete(id: string): Promise<void>
}
