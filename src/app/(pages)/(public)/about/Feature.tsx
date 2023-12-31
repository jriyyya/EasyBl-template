import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
import img1 from '@/assets/images/photos/14.jpg'

const Feature = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl mb-7">Join Us on the Journey</h1>
            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
            Your trade documents and transactions are precious, and we treat them as such. Easy BL employs state-of-the-art security measures, ensuring that your data is safeguarded at every step. With us, you can transmit documents with confidence, knowing that security is our top priority.
            </p>
            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-7">
            Embark on a New Era of Trade Technology with Easy BL. Experience the Future, Today.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image width={516} height={516} src={img1.src} alt="photo-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
