import { container } from 'tsyringe'
import { DeleteSpecialtyUseCase } from './DeleteSpecialtyUseCase'
import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'

export interface IDeleteSpecialtyRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class DeleteSpecialtyController {
  async handle(
    request: FastifyRequest<IDeleteSpecialtyRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const deleteSpecialtyUseCase = container.resolve(DeleteSpecialtyUseCase)
    await deleteSpecialtyUseCase.execute(id)

    return reply.status(204).send()
  }
}
