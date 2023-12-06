import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { DeletePatientUseCase } from './DeletePatientUseCase'

export interface IDeletePatientRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class DeletePatientController {
  async handle(
    request: FastifyRequest<IDeletePatientRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const deletePatientUseCase = container.resolve(DeletePatientUseCase)
    await deletePatientUseCase.execute(id)

    return reply.status(204).send()
  }
}
