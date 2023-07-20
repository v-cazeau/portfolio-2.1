import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero /> 
      <Portfolio />
      <Footer />
    </main>
  )
}
