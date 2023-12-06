import { inject, injectable } from 'tsyringe'
import { IPatientRepository } from '../../infra/IPatientRepository'
import { IResponseLoginDTO } from '../../dto/IResponseLoginDTO'
import * as crypto from 'crypto'

@injectable()
export class LoginPatientUseCase {
  constructor(
    @inject('PatientRepository')
    private patientRepository: IPatientRepository,
  ) {}

  async execute(
    email: string,
    password: string,
  ): Promise<IResponseLoginDTO | undefined> {
    const hash = crypto.createHash('sha256')
    const hashPassword = hash.update(password).digest('hex')
    const patient = await this.patientRepository.login(email, hashPassword)
    return patient
  }
}
