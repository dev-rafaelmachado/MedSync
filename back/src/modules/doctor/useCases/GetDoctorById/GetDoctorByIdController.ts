import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { GetDoctorByIdUseCase } from './GetDoctorByIdUseCase'

export interface IGetDoctorByIdRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class GetDoctorByIdController {
  async handle(
    request: FastifyRequest<IGetDoctorByIdRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const getDoctorByIdUseCase = container.resolve(GetDoctorByIdUseCase)
    const doctor = await getDoctorByIdUseCase.execute(id)

    return reply.status(200).send(doctor)
  }
}
