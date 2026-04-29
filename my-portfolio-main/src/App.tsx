import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/GlobalBackground";
import Hero from "./components/Hero";
import About from "./pages/About"; 
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0E0C0A] text-[#EADCC8]">
        <GlobalBackground />
        
        <div className="relative z-20 pt-32">
          <Navbar />
          
          <main className="space-y-20"> 
            <div id="inicio">
              <Hero />
            </div>

            {/* Inserindo a seção Sobre que acabamos de arrumar */}
            <div id="sobre">
              <About />
            </div>

            <div id="projetos">
              <Projects />
            </div>

            <div id="contato">
              <Contact />
            </div>
          </main>

          <footer className="py-10 text-center text-[#EADCC8]/40 text-sm">
            © 2026 Jenifer V. Boas • Engenharia de Software
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}





    
