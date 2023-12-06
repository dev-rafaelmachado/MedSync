import { FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetDoctorUseCase } from './GetDoctorUseCase'

export class GetDoctorController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const getDoctorUseCase = container.resolve(GetDoctorUseCase)
    const doctors = await getDoctorUseCase.execute()

    return reply.status(200).send(doctors)
  }
}
