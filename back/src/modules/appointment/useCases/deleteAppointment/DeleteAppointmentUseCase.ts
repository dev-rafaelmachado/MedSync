import { inject, injectable } from 'tsyringe'
import { IAppointmentRepository } from '../../infra/IAppointmentRepository'
import { IAdminRepository } from '../../../admin/infra/IAdminRepository'

@injectable()
export class DeleteAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository,
    @inject('AdminRepository')
    private adminRepository: IAdminRepository,
  ) {}

  async execute(id: string, adminId: string): Promise<void> {
    if (!id) {
      throw new Error('Invalid data')
    }
    if (!adminId) {
      throw new Error('Invalid data')
    }

    const admin = await this.adminRepository.findById(adminId)

    if (!admin) {
      throw new Error('Admin not found')
    }

    await this.appointmentRepository.delete(id)
  }
}
