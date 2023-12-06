import { inject, injectable } from 'tsyringe'
import { ICreateAppointmentDTO } from '../../dto/ICreateAppointmentDTO'
import { IGetAppointmentDTO } from '../../dto/IGetAppointmentByIdDTO'
import { IAppointmentRepository } from '../../infra/IAppointmentRepository'

@injectable()
export class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(data: ICreateAppointmentDTO): Promise<IGetAppointmentDTO> {
    if (!data.doctorId || !data.patientId || !data.date) {
      throw new Error('Invalid data')
    }
    const appointment = await this.appointmentRepository.create(data)
    return appointment
  }
}
