
import Navbar from './layout/Navbar'
import Hero from './Sections/Hero'
import About from  './Sections/About'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar/>
      <main>
        <Hero/>
          
          <About/>
          <Experience/>
          <Projects/>
      </main>
    </div>
  )
}

export default App