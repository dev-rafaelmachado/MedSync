import { Logout } from '@/components/Logout'
import { Requests } from '@/components/Requests'
import { IGetRequestById } from '@/types/requests/IGetRequestById'
import api from '@/utils/api'

const getRequests = async () => {
  const response = await api.get('v1/request')
  const data: IGetRequestById[] = response.data
  return data
}

const AdminHome = async () => {
  const requests: IGetRequestById[] = await getRequests()
  return (
    <div>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="container mx-auto flex w-[600px] flex-col gap-6 py-10">
          <div className="flex flex-col gap-4">
            <h1>Requisições:</h1>
            <Requests IRequests={requests} />
          </div>
        </div>
      </main>
      <Logout name="admin" />
    </div>
  )
}

export default AdminHome
