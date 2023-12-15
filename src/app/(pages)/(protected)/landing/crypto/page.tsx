import { Metadata } from 'next'
import Hero from '../../../(public)/(home)/Hero'
import Blog from './Blog'
import Stats from './Stats'
import Coins from './Coins'
import Features from '../../../(public)/(home)/Features'
import Integration from '../../../(public)/(home)/Integration'
import Footer from '@/components/common/Footer'

//data
import { coins, features, benefits, features1 } from '../../../(public)/(home)/data'
import Benefits from '../../../(public)/(home)/Benefits'
import Features1 from '../../../(public)/(home)/Features1'

export const metadata: Metadata = {
  title: 'Crypto Landing',
}

const Crypto = () => {
  return (
    <>
      <Hero />

      {/* <Coins coins={coins} /> */}

      <Features1 features={features1} />

      <Features features={features} />
      <Benefits services={benefits} />


      <Integration />

      {/* <Stats /> */}

      {/* <Blog /> */}

      <Footer />
    </>
  )
}

export default Crypto
