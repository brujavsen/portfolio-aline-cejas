import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

function App() {

  return (
    <div className='container'>
      <Header/>
      <About/>
      <hr />
      <Skills/>
      <hr />
      <Proyects/>
      <hr />
      <Contact/>
      <hr />
      <p className='rights'>Website created by <a href="https://github.com/brujavsen" target='_blank' rel='noreferrer'>Bruno</a>, all rights reserved. Created with React and SASS</p>
    </div>
  )
}

export default App