import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
