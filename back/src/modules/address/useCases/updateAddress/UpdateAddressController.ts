import { FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { UpdateAddressUseCase } from './UpdateAddressUsecase'
import { IUpdateAddressDTO } from '../../dto/IUpdateAddressDTO'

export interface IUpdateAddressRequest {
  Params: {
    id: string
  }
  Body: {
    street: string
    number: string
    zipCode: string
    city: string
    state: string
  }
}

export class UpdateAddressController {
  async handle(
    request: FastifyRequest<IUpdateAddressRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params
    const { street, city, number, state, zipCode } = request.body

    const updateData: IUpdateAddressDTO = {
      street,
      number,
      zipCode,
      city,
      state,
    }

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase)

    const res = await updateAddressUseCase.execute(id, updateData)

    return reply.status(200).send(res)
  }
}
