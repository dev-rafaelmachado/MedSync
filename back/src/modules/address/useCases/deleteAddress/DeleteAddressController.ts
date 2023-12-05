import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { DeleteAddressUseCase } from './DeleteAddressUseCase'

export interface IDeleteAddressByIdRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class DeleteAddressController {
  async handle(
    request: FastifyRequest<IDeleteAddressByIdRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const deleteAddressUseCase = container.resolve(DeleteAddressUseCase)

    await deleteAddressUseCase.execute(id)

    return reply.status(204).send()
  }
}
