import { inject, injectable } from 'tsyringe'
import { ISpecialtyRepository } from '../../infra/ISpecialtyRepository'

@injectable()
export class DeleteSpecialtyUseCase {
  constructor(
    @inject('SpecialtyRepository')
    private specialtyRepository: ISpecialtyRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) throw new Error('Id is required')
    await this.specialtyRepository.delete(id)
  }
}
