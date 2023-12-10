// import { Section } from '@/components/Section'

import { Section } from '@/components/Section'

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <Section
        title="Beneficiário"
        bgImage="bg-[url(https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg)]"
        link="/beneficiary"
      />
      <Section
        title="Médicos"
        bgImage="bg-[url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg)]"
        link="/doctor"
      />
      <Section
        title="Administração"
        bgImage="bg-[url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
        link="/admin"
      />
    </main>
  )
}
