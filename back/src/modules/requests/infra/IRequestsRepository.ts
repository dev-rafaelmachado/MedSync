import { ICreateRequestDTO } from '../dto/ICreateRequestDTO'
import { IGetRequestsByIdDTO } from '../dto/IGetRequestsByIdDTO'

export interface IRequestsRepository {
  create(data: ICreateRequestDTO): Promise<IGetRequestsByIdDTO>
  list(): Promise<IGetRequestsByIdDTO[]>
  findById(id: string): Promise<IGetRequestsByIdDTO | undefined>
  findByDoctorId(doctorId: string): Promise<IGetRequestsByIdDTO[]>
  delete(id: string): Promise<void>
}
