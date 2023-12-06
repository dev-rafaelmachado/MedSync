import { inject, injectable } from 'tsyringe'
import { IGetSpecialtyByIdDTO } from '../../dto/IGetSpecialtyByIdDTO'
import { ISpecialtyRepository } from '../../infra/ISpecialtyRepository'

@injectable()
export class GetSpecialtyByIdUseCase {
  constructor(
    @inject('SpecialtyRepository')
    private specialtyRepository: ISpecialtyRepository,
  ) {}

  async execute(id: string): Promise<IGetSpecialtyByIdDTO | undefined> {
    if (!id) throw new Error('Id is required')
    const specialty = await this.specialtyRepository.findById(id)
    return specialty
  }
}
