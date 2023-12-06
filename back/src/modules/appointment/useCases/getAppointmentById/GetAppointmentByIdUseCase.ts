import { inject, injectable } from 'tsyringe'
import { IGetAppointmentDTO } from '../../dto/IGetAppointmentByIdDTO'
import { IAppointmentRepository } from '../../infra/IAppointmentRepository'

@injectable()
export class GetAppointmentByIdUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(id: string): Promise<IGetAppointmentDTO | undefined> {
    if (!id) {
      throw new Error('Invalid data')
    }
    const appointment = await this.appointmentRepository.findById(id)
    return appointment
  }
}
