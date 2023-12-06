import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { CreateAppointmentUseCase } from './CreateAppointmentUseCase'

export interface ICreateAppointmentRequest extends RouteGenericInterface {
  Body: {
    date: Date
    doctorId: string
    patientId: string
  }
}

export class CreateAppointmentController {
  async handle(
    request: FastifyRequest<ICreateAppointmentRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { date, doctorId, patientId } = request.body

    const appointmentData = {
      date,
      doctorId,
      patientId,
    }

    const createAppointmentUseCase = container.resolve(CreateAppointmentUseCase)
    const appointment = await createAppointmentUseCase.execute(appointmentData)

    return reply.status(201).send(appointment)
  }
}
