import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { GetAddressByIdUseCase } from './GetAddressByIdUseCase'

export interface IGetAddressByIdRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class GetAddressByIdController {
  async handle(
    request: FastifyRequest<IGetAddressByIdRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const getAddressByIdUseCase = container.resolve(GetAddressByIdUseCase)

    const res = await getAddressByIdUseCase.execute(id)

    return reply.status(201).send(res)
  }
}
