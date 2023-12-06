import { inject, injectable } from 'tsyringe'
import { IRequestsRepository } from '../../infra/IRequestsRepository'
import { IGetRequestsByIdDTO } from '../../dto/IGetRequestsByIdDTO'

@injectable()
export class GetRequestUseCase {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository,
  ) {}

  async execute(searchKey: string) {
    let request: IGetRequestsByIdDTO[]
    if (searchKey) {
      request = await this.requestsRepository.findByDoctorId(searchKey)
    } else {
      request = await this.requestsRepository.list()
    }

    return request
  }
}
