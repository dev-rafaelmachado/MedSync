import { inject, injectable } from 'tsyringe'
import { IAddressRepository } from '../../infra/IAddressRepository'

@injectable()
export class DeleteAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new Error('Id is required')
    }
    const address = await this.addressRepository.findById(id)
    if (!address) {
      throw new Error('Address not found')
    }
    await this.addressRepository.delete(id)
  }
}
