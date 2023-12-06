import { prisma } from '../../../../service/prisma'
import { ICreateAdminDTO } from '../../dto/ICreateAdminDTO'
import { IGetAdminByIdDTO } from '../../dto/IGetAdminByIdDTO'
import { IResponseLoginDTO } from '../../dto/IRepsonseLoginDTO'
import { IUpdateAdminDTO } from '../../dto/IUpdateAdminDTO'
import { IAdminRepository } from '../IAdminRepository'

export class AdminRepository implements IAdminRepository {
  async create(data: ICreateAdminDTO): Promise<IGetAdminByIdDTO> {
    const admin = await prisma.admin.create({
      data,
    })
    return admin
  }

  async update(id: string, data: IUpdateAdminDTO): Promise<IGetAdminByIdDTO> {
    const admin = await prisma.admin.update({
      where: {
        id,
      },
      data,
    })
    return admin
  }

  async delete(id: string): Promise<void> {
    await prisma.admin.delete({
      where: {
        id,
      },
    })
  }

  async login(
    email: string,
    password: string,
  ): Promise<IResponseLoginDTO | undefined> {
    const admin = await prisma.admin.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
    return admin || undefined
  }

  async findById(id: string): Promise<IGetAdminByIdDTO | undefined> {
    const admin = await prisma.admin.findFirst({
      where: {
        id,
      },
    })
    return admin || undefined
  }
}
