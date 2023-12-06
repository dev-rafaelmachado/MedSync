import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { CreateAdminUseCase } from './CreateAdminUseCase'

export interface ICreateAdminRequest extends RouteGenericInterface {
  Body: {
    name: string
    email: string
    password: string
  }
}

export class CreateAdminController {
  async handle(
    request: FastifyRequest<ICreateAdminRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password } = request.body

    const adminData = {
      name,
      email,
      password,
    }

    const createAdminUseCase = container.resolve(CreateAdminUseCase)
    const admin = await createAdminUseCase.execute(adminData)

    return reply.status(201).send(admin)
  }
}
