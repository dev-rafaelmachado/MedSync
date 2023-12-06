import { inject, injectable } from 'tsyringe'
import { IDoctorRepository } from '../../infra/IDoctorRepository'
import { IUpdateDoctorDTO } from '../../dto/IUpdateDoctorDTO'
import { IGetDoctorById } from '../../dto/IGetDoctorById'
import * as crypto from 'crypto'

@injectable()
export class UpdateDoctorUseCase {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  async execute(id: string, data: IUpdateDoctorDTO): Promise<IGetDoctorById> {
    if (!id) throw new Error('Id is required')
    let hashPassword = ''
    if (data.password) {
      const hash = crypto.createHash('sha256')
      hashPassword = hash.update(data.password).digest('hex')
    }
    const doctor = await this.doctorRepository.update(id, {
      ...data,
      password: hashPassword || undefined,
    })

    return doctor
  }
}
