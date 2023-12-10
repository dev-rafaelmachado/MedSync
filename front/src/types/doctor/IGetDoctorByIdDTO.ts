// {
//     "id": "a256d2b3-2fcc-4bf6-9e0e-19e27210dd6c",
//     "name": "Dr. Rafael",
//     "email": "doutor@email.com",
//     "password": "a320480f534776bddb5cdb54b1e93d210a3c7d199e80a23c1b2178497b184c76",
//     "crm": "123456789",
//     "specialtyId": "6af85e49-879c-483a-9ca0-da51020e4023",
//     "addressId": "3f56436e-5de4-4999-a7c1-8fc8492ae57e",
//     "createdAt": "2023-12-06T04:30:19.264Z",
//     "updatedAt": "2023-12-06T04:30:19.264Z",
//     "address": {
//         "id": "3f56436e-5de4-4999-a7c1-8fc8492ae57e",
//         "zipCode": "12345-123",
//         "street": "Rua 1",
//         "number": "123",
//         "city": "CWB",
//         "state": "Paraná",
//         "createdAt": "2023-12-06T04:30:12.218Z",
//         "updatedAt": "2023-12-06T04:30:12.218Z"
//     },
//     "specialty": {
//         "id": "6af85e49-879c-483a-9ca0-da51020e4023",
//         "name": "Ortopedista",
//         "createdAt": "2023-12-06T04:29:54.450Z",
//         "updatedAt": "2023-12-06T04:29:54.450Z"
//     }
// }

import { IGetSpecialtyByIdDTO } from '../specialty/IGetSpecialtyByIdDTO'

export interface IAddress {
  id: string
  zipCode: string
  street: string
  number: string
  city: string
  state: string
  createdAt: Date
  updatedAt: Date
}

export interface IGetDoctorByIdDTO {
  id: string
  name: string
  email: string
  password: string
  crm: string
  specialtyId: string
  addressId: string
  createdAt: Date
  updatedAt: Date
  specialty: IGetSpecialtyByIdDTO
  address: IAddress
}
