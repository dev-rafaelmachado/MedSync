import { ICreateAddressDTO } from '../dto/ICreateAddressDTO'
import { IGetAddressByIdDTO } from '../dto/IGetAddressByIdDTO'
import { IUpdateAddressDTO } from '../dto/IUpdateAddressDTO'
import { AddressType } from './AddressType'

export interface IAddressRepository {
  create(data: ICreateAddressDTO): Promise<AddressType>
  findById(id: string): Promise<IGetAddressByIdDTO | null>
  findAll(): Promise<IGetAddressByIdDTO[]>
  update(id: string, data: IUpdateAddressDTO): Promise<AddressType>
  delete(id: string): Promise<void>
}
