import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { CreateRequestUseCase } from './CreateRequestUseCase'

export interface ICreateRequestRequest extends RouteGenericInterface {
  Body: {
    appointmentId: string
  }
}

export class CreateRequestController {
  async handle(
    request: FastifyRequest<ICreateRequestRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { appointmentId } = request.body

    const createRequestUseCase = container.resolve(CreateRequestUseCase)
    const IRequest = await createRequestUseCase.execute(appointmentId)

    return reply.status(201).send(IRequest)
  }
}
