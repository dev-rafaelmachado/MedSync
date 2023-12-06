import { injectable, inject } from 'tsyringe'
import { ISpecialtyRepository } from '../../infra/ISpecialtyRepository'
import { IGetSpecialtyByIdDTO } from '../../dto/IGetSpecialtyByIdDTO'

@injectable()
export class GetSpecialtyUseCase {
  constructor(
    @inject('SpecialtyRepository')
    private specialtyRepository: ISpecialtyRepository,
  ) {}

  async execute(): Promise<IGetSpecialtyByIdDTO[]> {
    const specialty = await this.specialtyRepository.list()
    return specialty
  }
}
