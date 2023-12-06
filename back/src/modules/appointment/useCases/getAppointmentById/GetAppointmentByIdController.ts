import { FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetAppointmentByIdUseCase } from './GetAppointmentByIdUseCase'

export interface IGetAppointmentByIdRequest {
  Params: {
    id: string
  }
}

export class GetAppointmentByIdController {
  async handle(
    request: FastifyRequest<IGetAppointmentByIdRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const getAppointmentByIdUseCase = container.resolve(
      GetAppointmentByIdUseCase,
    )
    const appointment = await getAppointmentByIdUseCase.execute(id)

    return reply.status(200).send(appointment)
  }
}
