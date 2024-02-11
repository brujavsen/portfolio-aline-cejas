import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {


  const year = new Date().getFullYear();

  return (
    <div className='container'>
      <Header/>
      <About/>
      <hr />
      <Skills/>
      <hr />
      <Projects/>
      <hr />
      <Contact/>
      <hr />
      <p className='rights'>Website created by <a href="https://github.com/brujavsen/portfolio-aline-cejas" target='_blank' rel='noreferrer'>Bruno</a>, all rights reserved. &copy; {year}</p>
    </div>
  )
}

export default App