import { inject, injectable } from 'tsyringe'
import { IPatientRepository } from '../../infra/IPatientRepository'

@injectable()
export class DeletePatientUseCase {
  constructor(
    @inject('PatientRepository')
    private patientRepository: IPatientRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) throw new Error('Id is required')
    await this.patientRepository.delete(id)
  }
}
