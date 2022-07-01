import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Others from './components/Others/Others'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <hr></hr>
      <Projects />
      <Others />
      <Footer />
      
    </div>
  )
}

export default App
