export default function Hero() {
  return (
    <div className="dark:bg-gray-900">
      <div className="flex justify-center">
        <div className="relative mx-4 w-screen">
          <img
            src="/images/hero.webp"
            alt="A work table with house plants"
            role="img"
            className="w-full h-full hidden lg:block"
          />
          <img
            src="/images/hero.webp"
            alt="A work table with house plants"
            role="img"
            className="hidden sm:block lg:hidden w-full h-full"
          />
          <img
            src="/images/hero.webp"
            alt="A work table with house plants"
            role="img"
            className="sm:hidden w-full h-full"
          />

          <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl mt-0 font-semibold text-gray-800 sm:w-8/12">
              Innovative, Immersive, Codecraft.
            </h1>
            <p className="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12">
              Accomplished Projects, Works, and Certs.
            </p>
            <button className="hidden sm:flex bg-purple-700 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Explore
            </button>
          </div>
          <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-purple-700 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
