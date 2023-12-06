import { inject, injectable } from 'tsyringe'
import { ICreatePatientDTO } from '../../dto/ICreatePatientDTO'
import { IGetPatientByIdDTO } from '../../dto/IGetPatientByIdDTO'
import { IPatientRepository } from '../../infra/IPatientRepository'
import * as crypto from 'crypto'

@injectable()
export class CreatePatientUseCase {
  constructor(
    @inject('PatientRepository')
    private patientRepository: IPatientRepository,
  ) {}

  async execute(data: ICreatePatientDTO): Promise<IGetPatientByIdDTO> {
    if (!data) throw new Error('Data is required')
    const hash = crypto.createHash('sha256')
    const hashPassword = hash.update(data.password).digest('hex')

    const patient = await this.patientRepository.create({
      ...data,
      password: hashPassword,
    })

    return patient
  }
}
