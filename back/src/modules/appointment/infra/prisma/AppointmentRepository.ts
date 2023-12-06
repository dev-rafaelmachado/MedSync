import { prisma } from '../../../../service/prisma'
import { ICreateAppointmentDTO } from '../../dto/ICreateAppointmentDTO'
import { IGetAppointmentDTO } from '../../dto/IGetAppointmentByIdDTO'
import { IAppointmentRepository } from '../IAppointmentRepository'

export class AppointmentRepository implements IAppointmentRepository {
  async create(
    appointment: ICreateAppointmentDTO,
  ): Promise<IGetAppointmentDTO> {
    const appointmentCreated = await prisma.appointment.create({
      data: {
        date: appointment.date,
        Doctor: {
          connect: {
            id: appointment.doctorId,
          },
        },
        Patient: {
          connect: {
            id: appointment.patientId,
          },
        },
      },
    })
    return appointmentCreated
  }

  async delete(id: string): Promise<void> {
    await prisma.appointment.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: string): Promise<IGetAppointmentDTO | undefined> {
    const appointment = await prisma.appointment.findFirst({
      where: {
        id,
      },
    })
    return appointment || undefined
  }

  async findByDoctorId(doctorId: string): Promise<IGetAppointmentDTO[]> {
    const appointments = await prisma.appointment.findMany({
      where: {
        doctorId,
      },
    })
    return appointments
  }

  async findByPatientId(patientId: string): Promise<IGetAppointmentDTO[]> {
    const appointments = await prisma.appointment.findMany({
      where: {
        patientId,
      },
    })
    return appointments
  }

  async list(): Promise<IGetAppointmentDTO[]> {
    const appointments = await prisma.appointment.findMany()
    return appointments
  }
}
