import { Metadata } from 'next'
import Hero from './Hero'
import Features from './Features'
import Integration from './Integration'
import Footer from '@/components/common/Footer'

//data
import { features, benefits, features1 } from './data'
import Benefits from './Benefits'
import Features1 from './Features1'

export const metadata: Metadata = {
  title: 'Crypto Landing',
}

const Crypto = () => {
  return (
    <>
      <Hero />
      <Features1 features={features1} />
      <Features features={features} />
      <Benefits services={benefits} />
      <Integration />
      <Footer />
    </>
  )
}

export default Crypto
