import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Header /> */}
      <Hero />
      {/* <Portfolio />
      <Technologies tabIndex={0} />
      <Certifications /> */}
      <Footer />
    </main>
  );
}
