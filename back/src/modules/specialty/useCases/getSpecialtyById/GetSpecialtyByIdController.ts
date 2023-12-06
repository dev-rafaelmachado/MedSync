import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { GetSpecialtyByIdUseCase } from './GetSpecialtyByIdUseCase'

export interface IGetSpecialtyRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class GetSpecialtyByIdController {
  async handle(
    request: FastifyRequest<IGetSpecialtyRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const getSpecialtyByIdUseCase = container.resolve(GetSpecialtyByIdUseCase)
    const specialty = await getSpecialtyByIdUseCase.execute(id)

    return reply.status(200).send(specialty)
  }
}
