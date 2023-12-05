import { inject, injectable } from 'tsyringe'
import { IAddressRepository } from '../../infra/IAddressRepository'

@injectable()
export class GetAddressByIdUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  async execute(id: string) {
    if (!id) throw new Error('id is required')
    const address = await this.addressRepository.findById(id)
    return address
  }
}
