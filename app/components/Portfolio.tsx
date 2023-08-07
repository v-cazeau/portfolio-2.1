export default function Portfolio() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-7 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="focus:outline-none xl:text-4xl md:text-4xl text-3xl text-center text-titanium-800 font-medium mb-5 pt-4">
            Portfolio
          </h1>
          <p className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
            "It does not matter how slowly you go as long as you do not stop." -
            Confucius
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Wonderlust: Capturing the Worlds Wonders, One Frame at a Time"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/wonderlust.jpeg"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  WONDERLUST
                </h2>
                <h3 className="text-gray-500 mb-3">Boca Code</h3>
                <p className="mb-4">
                  Transforming stress into tranquility through nature gazing and
                  listening to music.
                  <br />
                </p>
                <span className="inline-flex">
                  <a
                    href="https://final-project-bc.web.app/"
                    className="text-titanium-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/contacts/view.png"
                      height="30"
                      width="30"
                      alt="link to wonderlust project"
                    />
                  </a>

                  <a
                    href="https://github.com/v-cazeau/final-project-web"
                    className="ml-3 text-titanium-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/contacts/github.png"
                      height="30"
                      width="30"
                      alt="view wonderlust code in github"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/visualNovel.jpeg"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  VISUAL NOVEL
                </h2>
                <h3 className="text-gray-500 mb-3">UX/UI Internship</h3>
                <p className="mb-4">
                  An intertwining of standalone stories and imaginative
                  randomness to engage readers in a uniquely diverse narrative
                  journey.
                </p>
                <span className="inline-flex">
                  <a
                    href="graphic-novel-frontend.web.app/"
                    className="text-titanium-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/contacts/view.png"
                      height="30"
                      width="30"
                      alt="link to visual novel project"
                    />
                  </a>

                  <a
                    href="https://github.com/v-cazeau/graphic-novel-frontend"
                    className="ml-3 text-titanium-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/contacts/github.png"
                      height="30"
                      width="30"
                      alt="view visual novel code in github"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/jokeapp.jpeg"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  MOBILE JOKE APP
                </h2>
                <h3 className="text-gray-500 mb-3">Solo Propel</h3>
                <p className="mb-4">
                  Spread smiles and embrace laughter anytime, anywhere with the
                  'Got Jokes' app.
                </p>
                <span className="inline-flex">
                  {/* <a
                    href=""
                    className="text-titanium-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/contacts/view.png"
                      height="30"
                      width="30"
                      alt="link to wonderlust project"
                    />
                  </a> */}

                  <a
                    href="https://github.com/v-cazeau/joke-app"
                    className="ml-3 text-titanium-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/contacts/github.png"
                      height="30"
                      width="30"
                      alt="view got jokes code in github"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/206x206"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  Henry Letham
                </h2>
                <h3 className="text-gray-500 mb-3">Designer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
