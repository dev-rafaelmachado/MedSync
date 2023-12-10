import { BeneficiaryWrapped } from '@/components/form/beneficiary'

const beneficiaryPage = () => {
  return (
    <main className="flex h-screen w-screen bg-gradient-to-t from-sky-500 to-indigo-500 px-52 py-32">
      <div className="h-full w-2/3 bg-white/30 backdrop-blur-lg"></div>
      <div className="flex h-full w-1/3 flex-col bg-white p-16">
        <BeneficiaryWrapped />
      </div>
    </main>
  )
}

export default beneficiaryPage
