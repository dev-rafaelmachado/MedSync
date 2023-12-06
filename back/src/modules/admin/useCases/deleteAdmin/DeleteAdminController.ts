import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { DeleteAdminUseCase } from './DeleteAdminUseCase'

export interface IDeleteAdminRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class DeleteAdminController {
  async handle(
    request: FastifyRequest<IDeleteAdminRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const deleteAdminUseCase = container.resolve(DeleteAdminUseCase)
    await deleteAdminUseCase.execute(id)

    return reply.status(204).send()
  }
}
