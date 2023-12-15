const About = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="flex flex-col items-center lg:items-start">
            <div className="border-t-2 border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl">About Us</h1>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-gray-600">
            Easy BL stands as a beacon of innovation in the trade technology sector. We harness the power of cutting-edge advancements, ensuring that your trade processes are not just efficient but also at the forefront of industry trends.
            </p>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-gray-600">
            Our platform is meticulously designed to adhere to the Model Law on Electronic Transferable Records (MLETR). Every electronic document transmission is not just secure but also complies with international standards, offering you a trustworthy and legally recognized solution.
            </p>
          </div>
        </div>
        <div className="lg:mt-5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div />
            <div className="lg:col-span-2">
              <p className="text-sm/relaxed tracking-wider text-gray-600">
              Trade professionals of every expertise level will find our platform intuitive and easy to navigate. We believe in making electronic document transmission accessible to everyone, empowering businesses regardless of their size or technological familiarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
