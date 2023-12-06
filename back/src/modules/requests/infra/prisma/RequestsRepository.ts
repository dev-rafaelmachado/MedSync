import { prisma } from '../../../../service/prisma'
import { ICreateRequestDTO } from '../../dto/ICreateRequestDTO'
import { IGetRequestsByIdDTO } from '../../dto/IGetRequestsByIdDTO'
import { IRequestsRepository } from '../IRequestsRepository'

export class RequestsRepository implements IRequestsRepository {
  async create(data: ICreateRequestDTO): Promise<IGetRequestsByIdDTO> {
    const request = await prisma.requests.create({
      data,
      include: {
        appointment: true,
      },
    })

    return request
  }

  async delete(id: string): Promise<void> {
    await prisma.requests.delete({
      where: { id },
    })
  }

  list(): Promise<IGetRequestsByIdDTO[]> {
    const requests = prisma.requests.findMany({
      include: {
        appointment: true,
      },
    })

    return requests
  }

  async findById(id: string): Promise<IGetRequestsByIdDTO | undefined> {
    const request = await prisma.requests.findFirst({
      where: { id },
      include: {
        appointment: true,
      },
    })

    return request || undefined
  }

  async findByDoctorId(doctorId: string): Promise<IGetRequestsByIdDTO[]> {
    const requests = await prisma.requests.findMany({
      where: {
        appointment: {
          doctorId,
        },
      },
      include: {
        appointment: true,
      },
    })

    return requests
  }
}
