import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetRequestUseCase } from './GetRequestUseCase'

export interface IGetRequestRequest extends RouteGenericInterface {
  Querystring: {
    searchKey: string
  }
}

export class GetRequestController {
  async handle(
    request: FastifyRequest<IGetRequestRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { searchKey } = request.query

    const getRequestUseCase = container.resolve(GetRequestUseCase)
    const IRequest = await getRequestUseCase.execute(searchKey)

    return reply.status(201).send(IRequest)
  }
}
