import { inject, injectable } from 'tsyringe'
import { IAdminRepository } from '../../infra/IAdminRepository'
import { IUpdateAdminDTO } from '../../dto/IUpdateAdminDTO'
import * as crypto from 'crypto'

@injectable()
export class UpdateAdminUseCase {
  constructor(
    @inject('AdminRepository')
    private adminRepository: IAdminRepository,
  ) {}

  async execute(id: string, data: IUpdateAdminDTO) {
    if (!id) throw new Error('Id is required')
    let hashedPassword = ''
    if (data.password) {
      const hash = crypto.createHash('sha256')
      hashedPassword = hash.update(data.password).digest('hex')
    }

    const admin = await this.adminRepository.update(id, {
      ...data,
      password: hashedPassword || undefined,
    })
    return admin
  }
}
