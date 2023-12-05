import { inject, injectable } from 'tsyringe'
import { IAddressRepository } from '../../infra/IAddressRepository'
import { ICreateAddressDTO } from '../../dto/ICreateAddressDTO'

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  async execute(data: ICreateAddressDTO) {
    if (!data) throw new Error('Data is required')
    const address = await this.addressRepository.create(data)
    return address
  }
}
