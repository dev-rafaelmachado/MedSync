import { IUpdateAddressDTO } from './../../dto/IUpdateAddressDTO'
import { inject, injectable } from 'tsyringe'
import { IAddressRepository } from '../../infra/IAddressRepository'

@injectable()
export class UpdateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  async execute(id: string, data: IUpdateAddressDTO) {
    if (!id) {
      throw new Error('Id is required')
    }

    const address = await this.addressRepository.findById(id)

    if (!address) {
      throw new Error('Address not found')
    }

    const res = await this.addressRepository.update(id, data)
    console.log(res)
    return res
  }
}
