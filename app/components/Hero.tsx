export default function Hero() {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div
        className="container 
        flex flex-col md:flex-row  
        w-full md:w-10/12 lg:w-10/12
        mx-auto 
        px-5 py-7 md:py-10
        items-center"
      >
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/profilePic.webp"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 mt-2 font-medium text-titanium-700">
            Véronie Cazeau
          </h1>
          <h1 className="title-font sm:text-2xl text-2xl mb-4 font-light text-purple-800">
            Full-Stack Software Engineer
          </h1>

          <p className="mb-8 leading-relaxed">
            Motivated software engineer passionate about continuous learning,
            AI, UX/UI design, application development & project management.
            Skilled in React, React Native, Figma & FERN/MERN stack with over 8
            years of professional experience working with teams. Let's connect
            and create!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg ml-2 mr-5">
              <a
                href="/resume.pdf"
                className="text-titanium-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Résumé
              </a>
            </button>

            <button className="ml-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              <a
                href="https://bocacode.com/candidates/software-engineer/veronie-cazeau"
                className="text-titanium-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                More
              </a>
            </button>
            <br />
          </div>
          <div className="mt-2 flex justify-center">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/veronie-cazeau-/"
                className="ml-0 text-titanium-500 inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/contacts/linkedin.png"
                  height="50"
                  width="50"
                  alt="link to candidates page"
                />
              </a>
              <a
                href="https://github.com/v-cazeau"
                className="ml-7 text-titanium-500 inline-flex"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="/images/contacts/github.png"
                  height="50"
                  width="50"
                  alt="link to candidates page"
                />
              </a>
              <a
                href="mailto:veronie.cazeau@gmail.com"
                className="ml-7 text-titanium-500 inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="/images/contacts/email.png"
                  alt="email-sign"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
