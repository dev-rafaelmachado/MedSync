import { inject, injectable } from 'tsyringe'
import { IDoctorRepository } from '../../infra/IDoctorRepository'
import { IResponseLoginDTO } from '../../dto/IResponseLoginDTO'
import * as crypto from 'crypto'

@injectable()
export class LoginDoctorUseCase {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  async execute(email: string, password: string): Promise<IResponseLoginDTO> {
    if (!email) throw new Error('Email is required')
    if (!password) throw new Error('Password is required')
    const hash = crypto.createHash('sha256')
    const hashPassword = hash.update(password).digest('hex')

    const doctor = await this.doctorRepository.login(email, hashPassword)

    return doctor
  }
}
