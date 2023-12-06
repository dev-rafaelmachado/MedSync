import { FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetSpecialtyUseCase } from './GetSpecialtyUseCase'

export class GetSpecialtyController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const getSpecialtyUseCase = container.resolve(GetSpecialtyUseCase)
    const specialties = await getSpecialtyUseCase.execute()

    return reply.status(200).send(specialties)
  }
}
