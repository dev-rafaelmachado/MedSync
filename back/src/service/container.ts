import { container } from 'tsyringe'
import { AddressRepository } from '../modules/address/infra/prisma/AddressRepository'
import { IAddressRepository } from '../modules/address/infra/IAddressRepository'

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
)
