export default function Hero() {
  return (
    <section className=" w-full bg-gray-50 flex items-center">
      <div
        className="w-full bg-cover bg-center py-32"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
        aria-label="A work table with house plants"
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Welcome to My Portfolio</h1>
          <p className="text-xl mb-12">
            Innovative, Immersive, Codecraft. <br /> Accomplished Projects,
            Works, and Certs.
          </p>
          <a
            href="#"
            className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}
