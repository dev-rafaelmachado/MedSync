import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { GetAppointmentUseCase } from './GetAppointmentUseCase'

export interface IGetAppointmentRequest extends RouteGenericInterface {
  Querystring: {
    doctorId?: string
    patientId?: string
  }
}

export class GetAppointmentController {
  async handle(
    request: FastifyRequest<IGetAppointmentRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { doctorId, patientId } = request.query

    const getAppointmentUseCase = container.resolve(GetAppointmentUseCase)
    const appointments = await getAppointmentUseCase.execute(
      doctorId || '',
      patientId || '',
    )

    return reply.status(200).send(appointments)
  }
}
