import { prisma } from '../../../../service/prisma'
import { IGetSpecialtyByIdDTO } from '../../dto/IGetSpecialtyByIdDTO'
import { ISpecialtyRepository } from '../ISpecialtyRepository'

export class SpecialtyRepository implements ISpecialtyRepository {
  async create(name: string): Promise<IGetSpecialtyByIdDTO> {
    const specialty = await prisma.specialty.create({
      data: {
        name,
      },
    })
    return specialty
  }

  async list(): Promise<IGetSpecialtyByIdDTO[]> {
    const specialties = await prisma.specialty.findMany()
    return specialties
  }

  async findById(id: string): Promise<IGetSpecialtyByIdDTO | undefined> {
    const specialty = await prisma.specialty.findUnique({
      where: {
        id,
      },
    })
    return specialty || undefined
  }

  async delete(id: string): Promise<void> {
    await prisma.specialty.delete({
      where: {
        id,
      },
    })
  }
}
