import Clients from '@/components/sections/clients'
import Hero from '@/components/sections/hero'
import HowItWorks from '@/components/sections/how-it-works'
import BecomeMember from '@/components/sections/become-member'

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Clients />
      <BecomeMember />
    </main>
  )
}
