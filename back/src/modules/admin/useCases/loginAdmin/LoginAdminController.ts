import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { LoginAdminUseCase } from './LoginAdminUseCase'

export interface ILoginAdminRequest extends RouteGenericInterface {
  Body: {
    email: string
    password: string
  }
}

export class LoginAdminController {
  async handle(
    request: FastifyRequest<ILoginAdminRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { email, password } = request.body

    const loginAdminUseCase = container.resolve(LoginAdminUseCase)
    const admin = await loginAdminUseCase.execute(email, password)

    return reply.status(200).send(admin)
  }
}
