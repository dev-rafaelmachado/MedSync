import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { UpdateAdminUseCase } from './UpdateAdminUseCase'

export interface IUpdateAdminRequest extends RouteGenericInterface {
  Body: {
    name: string
    email: string
    password: string
  }
  Params: {
    id: string
  }
}

export class UpdateAdminController {
  async handle(
    request: FastifyRequest<IUpdateAdminRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password } = request.body
    const { id } = request.params

    const adminData = {
      name,
      email,
      password,
    }

    const updateAdminUseCase = container.resolve(UpdateAdminUseCase)
    const admin = await updateAdminUseCase.execute(id, adminData)

    return reply.status(201).send(admin)
  }
}
