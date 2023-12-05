import { prisma } from '../../../../service/prisma'
import { ICreateAddressDTO } from '../../dto/ICreateAddressDTO'
import { IGetAddressByIdDTO } from '../../dto/IGetAddressByIdDTO'
import { IUpdateAddressDTO } from '../../dto/IUpdateAddressDTO'
import { AddressType } from '../AddressType'
import { IAddressRepository } from '../IAddressRepository'

export class AddressRepository implements IAddressRepository {
  async create(data: ICreateAddressDTO): Promise<AddressType> {
    return prisma.address.create({
      data: {
        ...data,
      },
    })
  }

  async findById(id: string): Promise<IGetAddressByIdDTO | null> {
    return prisma.address.findUnique({
      where: {
        id,
      },
    })
  }

  async findAll(): Promise<IGetAddressByIdDTO[]> {
    return prisma.address.findMany()
  }

  async update(id: string, data: IUpdateAddressDTO): Promise<AddressType> {
    return prisma.address.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
      select: {
        id: true,
        street: true,
        number: true,
        zipCode: true,
        city: true,
        state: true,
        createdAt: true,
        updatedAt: true,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.address.delete({
      where: {
        id,
      },
    })
  }
}
