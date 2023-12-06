import { prisma } from '../../../../service/prisma'
import { ICreatePatientDTO } from '../../dto/ICreatePatientDTO'
import { IGetPatientByIdDTO } from '../../dto/IGetPatientByIdDTO'
import { IResponseLoginDTO } from '../../dto/IResponseLoginDTO'
import { IUpdatePatientDTO } from '../../dto/IUpdatePatientDTO'
import { IPatientRepository } from '../IPatientRepository'

export class PatientRepository implements IPatientRepository {
  async create(data: ICreatePatientDTO): Promise<IGetPatientByIdDTO> {
    const patient = await prisma.patient.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        cpf: data.cpf,
        phone: data.phone,
        birthDate: data.birthDate,
      },
    })

    return patient
  }

  async update(
    id: string,
    data: IUpdatePatientDTO,
  ): Promise<IGetPatientByIdDTO> {
    const patient = await prisma.patient.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        cpf: data.cpf,
        phone: data.phone,
        birthDate: data.birthDate,
      },
    })

    return patient
  }

  async delete(id: string): Promise<void> {
    await prisma.patient.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: string): Promise<IGetPatientByIdDTO | undefined> {
    const patient = await prisma.patient.findFirst({
      where: {
        id,
      },
    })

    return patient || undefined
  }

  async list(): Promise<IGetPatientByIdDTO[]> {
    const patients = await prisma.patient.findMany()

    return patients
  }

  async login(
    email: string,
    password: string,
  ): Promise<IResponseLoginDTO | undefined> {
    const patient = await prisma.patient.findUnique({
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

    if (!patient) {
      throw new Error('Email or password incorrect')
    }

    return patient
  }
}
