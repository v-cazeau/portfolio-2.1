import React from "react";

interface TechnologiesProps {
  tabIndex: number;
}

const Technologies: React.FC<TechnologiesProps> = ({ tabIndex }) => {
  return (
    <div className="container mx-auto pt-16">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1
          tabIndex={tabIndex}
          className="focus:outline-none xl:text-5xl md:text-3xl text-xl dark:text-white text-center text-gray-800 font-extrabold mb-5 pt-4"
        >
          Skills
        </h1>
        <p
          tabIndex={0}
          className="focus:outline-none text-base md:text-lg lg:text-xl dark:text-gray-200 text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
        >
          You don’t learn to walk by following rules. You learn by doing, and by
          falling over.
          <br />– Richard Branson
        </p>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/javascript.svg"
            alt="JavaScript"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/typescript.svg"
            alt="Typescript"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/bootstrap.svg"
            alt="Bootstrap"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/reactbootstrap.svg"
            alt="React Bootstrap"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/react.svg"
            alt="React.js"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/mongodb.svg"
            alt="MongoDB"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/gcp.svg"
            alt="Google Cloud Platform"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            tabIndex={0}
            className="focus:outline-none"
            src="/images/icons/nextjs.svg"
            alt="Honda"
            role="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
