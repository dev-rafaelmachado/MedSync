import { inject, injectable } from 'tsyringe'
import { IAdminRepository } from '../../infra/IAdminRepository'
import * as crypto from 'crypto'

@injectable()
export class LoginAdminUseCase {
  constructor(
    @inject('AdminRepository')
    private adminRepository: IAdminRepository,
  ) {}

  async execute(email: string, password: string) {
    const hash = crypto.createHash('sha256')
    const hashedPassword = hash.update(password).digest('hex')
    const admin = await this.adminRepository.login(email, hashedPassword)

    return admin
  }
}
