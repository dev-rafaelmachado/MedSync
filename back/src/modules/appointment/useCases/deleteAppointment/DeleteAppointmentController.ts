import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { DeleteAppointmentUseCase } from './DeleteAppointmentUseCase'

export interface IDeleteAppointmentRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
  Headers: {
    adminId: string
  }
}

export class DeleteAppointmentController {
  async handle(
    request: FastifyRequest<IDeleteAppointmentRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params
    const { adminid } = request.headers

    const deleteAppointmentUseCase = container.resolve(DeleteAppointmentUseCase)
    await deleteAppointmentUseCase.execute(id, adminid as string)

    return reply.status(204).send()
  }
}
