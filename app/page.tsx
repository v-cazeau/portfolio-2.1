import Hero from "./components/Hero";
// import Hero1 from "./components/Hero1";
// import Portfolio from "./components/Portfolio";
// import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
// import Technologies from "./components/Technologies";
// import Header from "./components/Header";
// import Testing from "./components/Testing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Header />
      <Hero1 />
      <Portfolio />
      {/* <Testing /> */}
      {/* <Technologies tabIndex={0} /> */}
      <Hero />
      {/* <Certifications /> */}
      <Footer />
    </main>
  );
}
