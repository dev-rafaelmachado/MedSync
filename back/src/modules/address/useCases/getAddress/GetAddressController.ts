import { FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetAddressUseCase } from './GetAddressUseCase'

export class GetAddressController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const getAddressUseCase = container.resolve(GetAddressUseCase)

    const res = await getAddressUseCase.execute()

    return reply.status(201).send(res)
  }
}
