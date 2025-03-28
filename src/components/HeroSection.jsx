import React from 'react'

function HeroSection() {
  return (
    <section className="relative bg-gray-900 overflow-hidden flex justify-center items-center">
    <div className="max-w-8xl mx-auto">
      {" "}
      <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          {" "}
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              {" "}
              <span className="block">Discover Timeless</span>
              <span className="block text-custom">Artificial Jewelry</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {" "}
              Explore our curated collection of stunning artificial jewelry
              pieces that combine elegance with affordability.
            </p>{" "}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                {" "}
                <a
                  href="#"
                  className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-custom hover:bg-custom/90 md:py-4 md:text-lg md:px-10"
                >
                  {" "}
                  Shop Now
                </a>
              </div>{" "}
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-custom text-base font-medium text-custom bg-transparent hover:bg-custom/10 md:py-4 md:text-lg md:px-10"
                >
                  {" "}
                  View Collections
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    <div className=" lg:inset-y-0 lg:right-0 lg:w-[50%] h-[50vh]">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://cdn.pixabay.com/photo/2024/03/27/19/39/ai-generated-8659741_1280.jpg"
        alt="Featured Jewelry"
      />{" "}
    </div>
  </section>
  )
}

export default HeroSection