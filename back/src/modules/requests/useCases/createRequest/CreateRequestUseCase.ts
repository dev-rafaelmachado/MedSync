import { injectable, inject } from 'tsyringe'
import { IRequestsRepository } from '../../infra/IRequestsRepository'

@injectable()
export class CreateRequestUseCase {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository,
  ) {}

  async execute(appointmentId: string) {
    const request = await this.requestsRepository.create({ appointmentId })

    return request
  }
}
