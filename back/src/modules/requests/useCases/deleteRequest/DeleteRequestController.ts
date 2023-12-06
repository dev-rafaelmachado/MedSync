import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { DeleteRequestUseCase } from './DeleteRequestUseCase'

export interface IDeleteRequestRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class DeleteRequestController {
  async handle(
    request: FastifyRequest<IDeleteRequestRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const deleteRequestUseCase = container.resolve(DeleteRequestUseCase)
    await deleteRequestUseCase.execute(id)

    return reply.status(201).send()
  }
}
