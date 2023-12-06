import { container } from 'tsyringe'
import { AddressRepository } from '../modules/address/infra/prisma/AddressRepository'
import { IAddressRepository } from '../modules/address/infra/IAddressRepository'
import { IAdminRepository } from '../modules/admin/infra/IAdminRepository'
import { AdminRepository } from '../modules/admin/infra/prisma/AdminRepository'
import { IDoctorRepository } from '../modules/doctor/infra/IDoctorRepository'
import { DoctorRepository } from '../modules/doctor/infra/prisma/DoctorRepository'
import { IPatientRepository } from '../modules/patient/infra/IPatientRepository'
import { PatientRepository } from '../modules/patient/infra/prisma/PatientRepository'
import { ISpecialtyRepository } from '../modules/specialty/infra/ISpecialtyRepository'
import { SpecialtyRepository } from '../modules/specialty/infra/prisma/SpecialtyRepository'
import { IRequestsRepository } from '../modules/requests/infra/IRequestsRepository'
import { RequestsRepository } from '../modules/requests/infra/prisma/RequestsRepository'
import { IAppointmentRepository } from '../modules/appointment/infra/IAppointmentRepository'
import { AppointmentRepository } from '../modules/appointment/infra/prisma/AppointmentRepository'

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
)

container.registerSingleton<IAdminRepository>(
  'AdminRepository',
  AdminRepository,
)

container.registerSingleton<IDoctorRepository>(
  'DoctorRepository',
  DoctorRepository,
)

container.registerSingleton<IPatientRepository>(
  'PatientRepository',
  PatientRepository,
)

container.registerSingleton<ISpecialtyRepository>(
  'SpecialtyRepository',
  SpecialtyRepository,
)

container.registerSingleton<IRequestsRepository>(
  'RequestsRepository',
  RequestsRepository,
)

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository,
)
