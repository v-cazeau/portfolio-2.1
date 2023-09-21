export default function Footer() {
  const fullYear = new Date().getFullYear();
  const gitHubLink = "https://github.com/v-cazeau";

  return (
    <footer className="text-center text-gray-600 body-font">
      <section className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-stretch text-gray-600">
          <a
            href="https://www.linkedin.com/in/veronie-cazeau-/"
            className="ml-0 text-titanium-500 inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/logo1.webp"
              height="40"
              width="40"
              alt="logo: Light grey capital V, purple capital C, with Véronie Cazeau overlayed."
            />
          </a>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy;{fullYear}
          <a
            href="https://github.com/v-cazeau"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Véronie Cazeau
          </a>
        </p>
        <div className="social-icons md:ml-5 mt-3">
          <a
            href="https://www.linkedin.com/in/veronie-cazeau-/"
            className="ml-0 text-titanium-500 inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/contacts/linkedin.png"
              height="25"
              width="25"
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
              height="25"
              width="25"
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
              width="25"
              height="25"
              src="/images/contacts/email.png"
              alt="email-sign"
            />
          </a>
        </div>
      </section>
    </footer>
  );
}
