import Hero from "./components/Hero"
import Hero2 from "./components/Hero2"
import Portfolio from "./components/Portfolio"
import Certifications from "./components/Certifications"
import Footer from "./components/Footer"
import Technologies from "./components/Technologies"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero2 />
      <Portfolio />
      <Technologies tabIndex={0} />
      <Hero /> 
      <Certifications />
      <Footer />
    </main>
  )
}
