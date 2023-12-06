import { injectable, inject } from 'tsyringe'
import { IDoctorRepository } from '../../infra/IDoctorRepository'

@injectable()
export class DeleteDoctorUseCase {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) throw new Error('Id is required')

    await this.doctorRepository.delete(id)
  }
}
