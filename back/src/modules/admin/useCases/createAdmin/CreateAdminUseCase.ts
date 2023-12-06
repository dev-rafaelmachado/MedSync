import { inject, injectable } from 'tsyringe'
import { ICreateAdminDTO } from '../../dto/ICreateAdminDTO'
import { IAdminRepository } from '../../infra/IAdminRepository'
import * as crypto from 'crypto'

@injectable()
export class CreateAdminUseCase {
  constructor(
    @inject('AdminRepository')
    private adminRepository: IAdminRepository,
  ) {}

  async execute(data: ICreateAdminDTO) {
    const hash = crypto.createHash('sha256')
    const hashedPassword = hash.update(data.password).digest('hex')
    const admin = await this.adminRepository.create({
      ...data,
      password: hashedPassword,
    })
    return admin
  }
}
