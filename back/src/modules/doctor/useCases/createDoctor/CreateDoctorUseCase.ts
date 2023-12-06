import { inject, injectable } from 'tsyringe'
import { ICreateDoctorDTO } from '../../dto/ICreateDoctorDTO'
import { IGetDoctorById } from '../../dto/IGetDoctorById'
import { IDoctorRepository } from '../../infra/IDoctorRepository'
import * as crypto from 'crypto'

@injectable()
export class CreateDoctorUseCase {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  async execute(data: ICreateDoctorDTO): Promise<IGetDoctorById> {
    const hash = crypto.createHash('sha256')
    const hashPassword = hash.update(data.password).digest('hex')
    const doctor = await this.doctorRepository.create({
      ...data,
      password: hashPassword,
    })

    return doctor
  }
}
