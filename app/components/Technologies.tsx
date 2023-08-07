import React from "react";

export default function Technologies() {
  return (
    <section className="container mx-auto py-7 pr-3 pl-3 mt-0">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="focus:outline-none xl:text-4xl md:text-4xl text-3xl dark:text-white text-center text-titanium-800 font-medium mb-5 pt-4">
          Skills
        </h1>
        <p className="focus:outline-none text-base md:text-lg lg:text-xl dark:text-gray-200 text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
          "Every artist was first an amateur." -Ralph Waldo Emerson
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className="p-4">
          <img
            src="/images/icons/javascript.svg"
            className=""
            alt="JavaScript"
          />
        </div>
        <div className="p-4">
          <img
            src="/images/icons/typescript.svg"
            className="w-32 "
            alt="TypeScript"
          />
        </div>
        <div className="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
            className="w-32 "
            alt=""
          />
        </div>
        <div className="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
            className="w-32 "
            alt=""
          />
        </div>
        <div className="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
            className="w-32"
            alt=""
          />
        </div>
        <div className="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
            className="w-32"
            alt=""
          />
        </div>
        <div className="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
            className="w-20"
            alt=""
          />
        </div>
        <div className="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
            className="w-24"
            alt=""
          />
        </div>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            className="focus:outline-none logo-img"
            src=""
            alt="JavaScript"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            className="focus:outline-none logo-img"
            src=""
            alt="TypeScript"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
          <img
            className="focus:outline-none logo-img"
            src="/images/icons/bootstrap.svg"
            alt="Bootstrap"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            className="focus:outline-none logo-img"
            src="/images/icons/reactbootstrap.svg"
            alt="React Bootstrap"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <img
            className="focus:outline-none logo-img"
            src="/images/icons/react.svg"
            alt="React.js"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <img
            className="focus:outline-none logo-img"
            src="/images/icons/mongodb.svg"
            alt="MongoDB"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            className="focus:outline-none logo-img"
            src="/images/icons/gcp.svg"
            alt="Google Cloud Platform"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            className="focus:outline-none logo-img"
            src="/images/icons/nextjs.svg"
            alt="Next.js"
            role="img"
          />
        </div>
      </div>
    </section>
  );
}
