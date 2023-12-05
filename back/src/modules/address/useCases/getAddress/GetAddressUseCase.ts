import { inject, injectable } from 'tsyringe'
import { IAddressRepository } from '../../infra/IAddressRepository'

@injectable()
export class GetAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  async execute() {
    const address = await this.addressRepository.findAll()
    return address
  }
}
