import Footer from './components/Footer'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#171715] text-[#f4f0e9]">
      <CursorGlow/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
