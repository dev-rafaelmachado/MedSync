import { injectable, inject } from 'tsyringe'
import { IRequestsRepository } from '../../infra/IRequestsRepository'

@injectable()
export class GetRequestByIdUseCase {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository,
  ) {}

  async execute(id: string) {
    const request = await this.requestsRepository.findById(id)

    return request
  }
}
