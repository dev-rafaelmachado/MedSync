import { injectable, inject } from 'tsyringe'
import { IRequestsRepository } from '../../infra/IRequestsRepository'

@injectable()
export class DeleteRequestUseCase {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository,
  ) {}

  async execute(id: string) {
    const request = await this.requestsRepository.delete(id)

    return request
  }
}
