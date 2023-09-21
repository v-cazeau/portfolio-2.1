import Hero from "./components/Hero";
// import Hero1 from "./components/Hero1";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      {/* <Hero1 /> */}
      <Hero />
      <Portfolio />
      <Technologies />
      <Certifications />
      <Footer />
    </main>
  );
}
