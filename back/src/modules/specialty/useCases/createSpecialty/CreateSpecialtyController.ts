import { CreateSpecialtyUseCase } from './CreateSpecialtyUseCase'
import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'

export interface ICreateSpecialtyRequest extends RouteGenericInterface {
  Body: {
    name: string
  }
}

export class CreateSpecialtyController {
  async handle(
    request: FastifyRequest<ICreateSpecialtyRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name } = request.body

    const createSpecialtyUseCase = container.resolve(CreateSpecialtyUseCase)
    const specialty = await createSpecialtyUseCase.execute(name)

    return reply.status(201).send(specialty)
  }
}
