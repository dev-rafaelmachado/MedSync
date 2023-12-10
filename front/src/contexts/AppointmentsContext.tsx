import { Appointment } from '@/components/PatientAppointments'
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface AppointmentsContextProps {
  appointments: Appointment[]
  setAppointments: Dispatch<SetStateAction<Appointment[]>>
}

const AppointmentsContext = createContext<AppointmentsContextProps | undefined>(
  undefined,
)

interface AppointmentsProviderProps {
  children: ReactNode
}

export const AppointmentsProvider: React.FC<AppointmentsProviderProps> = ({
  children,
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  )
}

export const useAppointments = (): AppointmentsContextProps => {
  const context = useContext(AppointmentsContext)

  if (!context) {
    throw new Error(
      'useAppointments deve ser utilizado dentro de AppointmentsProvider',
    )
  }

  return context
}
