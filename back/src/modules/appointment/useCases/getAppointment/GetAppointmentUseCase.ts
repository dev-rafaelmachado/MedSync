import { inject, injectable } from 'tsyringe'
import { IAppointmentRepository } from '../../infra/IAppointmentRepository'
import { IGetAppointmentDTO } from '../../dto/IGetAppointmentByIdDTO'

@injectable()
export class GetAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(
    doctorId: string,
    patientId: string,
  ): Promise<IGetAppointmentDTO[]> {
    if (doctorId && patientId) {
      throw new Error('Invalid data')
    }
    if (doctorId) {
      const appointments =
        await this.appointmentRepository.findByDoctorId(doctorId)
      return appointments
    }
    if (patientId) {
      const appointments =
        await this.appointmentRepository.findByPatientId(patientId)
      return appointments
    } else {
      const appointments = await this.appointmentRepository.list()
      return appointments
    }
  }
}
