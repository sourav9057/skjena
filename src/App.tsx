import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <main className="main-content">
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
