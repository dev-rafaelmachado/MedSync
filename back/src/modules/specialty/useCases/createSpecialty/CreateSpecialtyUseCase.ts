import { inject, injectable } from 'tsyringe'
import { IGetSpecialtyByIdDTO } from '../../dto/IGetSpecialtyByIdDTO'
import { ISpecialtyRepository } from '../../infra/ISpecialtyRepository'

@injectable()
export class CreateSpecialtyUseCase {
  constructor(
    @inject('SpecialtyRepository')
    private specialtyRepository: ISpecialtyRepository,
  ) {}

  async execute(name: string): Promise<IGetSpecialtyByIdDTO> {
    if (!name) throw new Error('Name is required')
    const specialty = await this.specialtyRepository.create(name)
    return specialty
  }
}
