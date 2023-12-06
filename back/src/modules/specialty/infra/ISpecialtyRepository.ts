import { IGetSpecialtyByIdDTO } from '../dto/IGetSpecialtyByIdDTO'

export interface ISpecialtyRepository {
  create(name: string): Promise<IGetSpecialtyByIdDTO>
  list(): Promise<IGetSpecialtyByIdDTO[]>
  findById(id: string): Promise<IGetSpecialtyByIdDTO | undefined>
  delete(id: string): Promise<void>
}
