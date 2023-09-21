import React from "react";

export default function Technologies() {
  return (
    <section id="skills" className="container mx-auto py-7 pr-3 pl-3 mt-0">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="focus:outline-none xl:text-4xl md:text-4xl text-3xl text-center text-gray-600 font-medium mb-5 pt-4">
          Skills
        </h1>
        <p className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
          "Every artist was first an amateur." -Ralph Waldo Emerson
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
        <div className="p-4">
          <img
            src="/images/icons/javascript.svg"
            className="w-32"
            alt="JavaScript"
          />
        </div>
        <div className="p-4">
          <img
            src="/images/icons/typescript.svg"
            className="w-24 mt-4 "
            alt="TypeScript"
          />
        </div>
        <div className="p-4">
          <img src="/images/icons/react.svg" className="w-28" alt="React" />
        </div>
        <div className="p-4">
          <img
            src="/images/icons/reactbootstrap.svg"
            className="w-28"
            alt="React Bootstrap"
          />
        </div>
        <div className="p-4">
          <img
            src="/images/icons/bootstrap.svg"
            className="w-32 "
            alt="Bootstrap"
          />
        </div>
        <div className="p-4">
          <img src="/images/icons/nextjs.svg" className="w-32" alt="Next.js" />
        </div>
        <div className="p-4">
          <img src="/images/icons/mongodb.svg" className="w-28" alt="MongoDB" />
        </div>
        <div className="p-4">
          <img
            src="/images/icons/gcp.svg"
            className="w-24"
            alt="Google Cloud Platform"
          />
        </div>
      </div>
    </section>
  );
}
