import { injectable, inject } from 'tsyringe'
import { IGetPatientByIdDTO } from '../../dto/IGetPatientByIdDTO'
import { IPatientRepository } from '../../infra/IPatientRepository'

@injectable()
export class GetPatientUseCase {
  constructor(
    @inject('PatientRepository')
    private patientRepository: IPatientRepository,
  ) {}

  async execute(): Promise<IGetPatientByIdDTO[]> {
    const patients = await this.patientRepository.list()

    return patients
  }
}
