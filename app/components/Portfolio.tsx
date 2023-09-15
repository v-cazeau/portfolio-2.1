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
              {/* <a
                href="https://final-project-bc.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <img
                alt="Wonderlust: Capturing the World's Wonders, One Frame at a Time"
                className="flex-shrink-0 rounded-lg w-48 h-48 md:w-30 md:h-30"
                // width="48" // Set the desired width in pixels for small screens
                // height="48" // Set the desired height in pixels for small screens
                src="/images/works/wonderlust.jpeg"
                // style={{ width: "90", height: "auto" }}
              />
              {/* </a> */}
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
              {/* <a
                href="https://graphic-novel-frontend.web.app/"
                className="text-titanium-500"
                target="_blank"
                rel="noreferrer"
              > */}
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/visualNovel.jpeg"
              />
              {/* </a> */}
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
                    href="https://graphic-novel-frontend.web.app/"
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
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/hushhypes.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  EVENT PAGE
                </h2>
                <h3 className="text-gray-500 mb-3">WordPress/PHP Internship</h3>
                <p className="mb-4">Desc HEREEEEEE</p>
                <span className="inline-flex">
                  <a
                    href="https://jihos18.sg-host.com/"
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
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/serenitea.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  BLOG
                </h2>
                <h3 className="text-gray-500 mb-3">WordPress/PHP Internship</h3>
                <p className="mb-4">Desc HEREEEEEE</p>
                <span className="inline-flex">
                  <a
                    href="https://jihos18.sg-host.com/"
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
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/works/terradium.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-7">
                  SMALL BUSINESS SITE
                </h2>
                <h3 className="text-gray-500 mb-3">WordPress/PHP Internship</h3>
                <p className="mb-4">Desc HEREEEEEE</p>
                <span className="inline-flex">
                  <a
                    href="https://jihos18.sg-host.com/"
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
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
