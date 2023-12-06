import { inject, injectable } from 'tsyringe'
import { IGetPatientByIdDTO } from '../../dto/IGetPatientByIdDTO'
import { IUpdatePatientDTO } from '../../dto/IUpdatePatientDTO'
import { IPatientRepository } from '../../infra/IPatientRepository'
import * as crypto from 'crypto'

@injectable()
export class UpdatePatientUseCase {
  constructor(
    @inject('PatientRepository')
    private patientRepository: IPatientRepository,
  ) {}

  async execute(
    id: string,
    data: IUpdatePatientDTO,
  ): Promise<IGetPatientByIdDTO> {
    if (!data) throw new Error('Data is required')
    if (!id) throw new Error('Id is required')

    let hashPassword = ''
    if (data.password) {
      const hash = crypto.createHash('sha256')
      hashPassword = hash.update(data.password).digest('hex')
    }
    const patient = await this.patientRepository.update(id, {
      ...data,
      password: hashPassword,
    })

    return patient
  }
}
