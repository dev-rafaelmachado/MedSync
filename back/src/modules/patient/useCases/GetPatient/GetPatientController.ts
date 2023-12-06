import { FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetPatientUseCase } from './GetPatientUseCase'

export class GetPatientController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const getPatientUseCase = container.resolve(GetPatientUseCase)
    const patients = await getPatientUseCase.execute()

    return reply.status(200).send(patients)
  }
}
