import { IGetAdminByIdDTO } from '../dto/IGetAdminByIdDTO'
import { ICreateAdminDTO } from '../dto/ICreateAdminDTO'
import { IUpdateAdminDTO } from '../dto/IUpdateAdminDTO'
import { IResponseLoginDTO } from '../dto/IRepsonseLoginDTO'

export interface IAdminRepository {
  create(data: ICreateAdminDTO): Promise<IGetAdminByIdDTO>
  update(id: string, data: IUpdateAdminDTO): Promise<IGetAdminByIdDTO>
  delete(id: string): Promise<void>
  findById(id: string): Promise<IGetAdminByIdDTO | undefined>
  login(email: string, password: string): Promise<IResponseLoginDTO | undefined>
}
