export default function Header() {
  return (
    <header className="container">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-7 md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-gray-900 hover:text-gray-700">Portfolio</a>
          <a className="mr-5 text-gray-900 hover:text-gray-700">About</a>
          <a className="mr-5 text-gray-900 hover:text-gray-700">Skills</a>
          <a className="mr-5 text-gray-900 hover:text-gray-700">
            Certification
          </a>
        </nav>
        <button className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg ml-2 mr-5 mt-3">
          <a
            href="/fsse2023resume.pdf"
            className="text-titanium-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            Résumé
          </a>
        </button>
      </div>
    </header>
  );
}
