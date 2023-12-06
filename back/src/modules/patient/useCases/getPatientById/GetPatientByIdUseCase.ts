import { inject, injectable } from 'tsyringe'
import { IPatientRepository } from '../../infra/IPatientRepository'
import { IGetPatientByIdDTO } from '../../dto/IGetPatientByIdDTO'

@injectable()
export class GetPatientByIdUseCase {
  constructor(
    @inject('PatientRepository')
    private patientRepository: IPatientRepository,
  ) {}

  async execute(id: string): Promise<IGetPatientByIdDTO | undefined> {
    if (!id) throw new Error('Id is required')
    const patient = await this.patientRepository.findById(id)

    return patient
  }
}
