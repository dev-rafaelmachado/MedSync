import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { DeleteDoctorUseCase } from './DeleteDoctorUseCase'

export interface IDeleteDoctorRequest extends RouteGenericInterface {
  Params: {
    id: string
  }
}

export class DeleteDoctorController {
  async handle(
    request: FastifyRequest<IDeleteDoctorRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params

    const deleteDoctorUseCase = container.resolve(DeleteDoctorUseCase)
    await deleteDoctorUseCase.execute(id)

    return reply.status(204).send()
  }
}
