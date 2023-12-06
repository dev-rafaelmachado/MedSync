import { prisma } from '../../../../service/prisma'
import { ICreateDoctorDTO } from '../../dto/ICreateDoctorDTO'
import { IGetDoctorById } from '../../dto/IGetDoctorById'
import { IResponseLoginDTO } from '../../dto/IResponseLoginDTO'
import { IUpdateDoctorDTO } from '../../dto/IUpdateDoctorDTO'
import { IDoctorRepository } from '../IDoctorRepository'

export class DoctorRepository implements IDoctorRepository {
  async create(data: ICreateDoctorDTO): Promise<IGetDoctorById> {
    const doctor = await prisma.doctor.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        crm: data.crm,
        address: {
          connect: {
            id: data.addressId,
          },
        },
        specialty: {
          connect: {
            id: data.specialtiesId,
          },
        },
      },
    })

    return doctor
  }

  async findById(id: string): Promise<IGetDoctorById | undefined> {
    const doctor = await prisma.doctor.findUnique({
      where: {
        id,
      },
      include: {
        address: true,
        specialty: true,
      },
    })

    return doctor || undefined
  }

  async list(): Promise<IGetDoctorById[]> {
    const doctors = await prisma.doctor.findMany({
      include: {
        address: true,
        specialty: true,
      },
    })

    return doctors
  }

  async update(id: string, data: IUpdateDoctorDTO): Promise<IGetDoctorById> {
    const doctor = await prisma.doctor.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        crm: data.crm,
        address: {
          connect: {
            id: data.addressId,
          },
        },
        specialty: {
          connect: {
            id: data.specialtiesId,
          },
        },
      },
    })

    return doctor
  }

  async delete(id: string): Promise<void> {
    await prisma.doctor.delete({
      where: {
        id,
      },
    })
  }

  async login(email: string, password: string): Promise<IResponseLoginDTO> {
    const doctor = await prisma.doctor.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        crm: true,
      },
    })

    if (!doctor) {
      throw new Error('Email or password incorrect')
    }

    return doctor
  }
}
