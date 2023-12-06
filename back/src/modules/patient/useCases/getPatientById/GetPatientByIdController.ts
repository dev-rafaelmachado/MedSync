import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { GetPatientByIdUseCase } from './GetPatientByIdUseCase'

export interface IGetPatientByIdRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class GetPatientByIdController {
  async handle(
    request: FastifyRequest<IGetPatientByIdRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const getPatientByIdUseCase = container.resolve(GetPatientByIdUseCase)
    const patient = await getPatientByIdUseCase.execute(id)

    return reply.status(200).send(patient)
  }
}
