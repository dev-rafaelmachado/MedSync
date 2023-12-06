import { inject, injectable } from 'tsyringe'
import { IAdminRepository } from '../../infra/IAdminRepository'

@injectable()
export class DeleteAdminUseCase {
  constructor(
    @inject('AdminRepository')
    private adminRepository: IAdminRepository,
  ) {}

  async execute(id: string) {
    if (!id) throw new Error('Id is required')
    await this.adminRepository.delete(id)
  }
}
