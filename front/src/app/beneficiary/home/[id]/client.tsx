'use client'

import { PatientAppointments } from '@/components/PatientAppointments'
import { Marker } from '@/components/Marker'
import { AppointmentsProvider } from '@/contexts/AppointmentsContext'
import { IGetAppointmentsById } from '@/types/appointments/IGetAppointmentsById'
import { IGetDoctorByIdDTO } from '@/types/doctor/IGetDoctorByIdDTO'
import { IGetSpecialtyByIdDTO } from '@/types/specialty/IGetSpecialtyByIdDTO'

interface Props {
  doctors: IGetDoctorByIdDTO[]
  specialty: IGetSpecialtyByIdDTO[]
  patientAppointments: IGetAppointmentsById[]
}

export const Client = ({ doctors, specialty, patientAppointments }: Props) => {
  return (
    <AppointmentsProvider>
      <Marker doctors={doctors} specialty={specialty} />
      <div className="flex flex-col gap-4">
        <h1>Consultas:</h1>
        <PatientAppointments patientAppointments={patientAppointments} />
      </div>
    </AppointmentsProvider>
  )
}
