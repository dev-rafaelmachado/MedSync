import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { GetRequestByIdUseCase } from './GetRequestByIdUseCase'

export interface IGetRequestByIdRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class GetRequestByIdController {
  async handle(
    request: FastifyRequest<IGetRequestByIdRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const getRequestByIdUseCase = container.resolve(GetRequestByIdUseCase)
    const IRequest = await getRequestByIdUseCase.execute(id)

    return reply.status(201).send(IRequest)
  }
}
