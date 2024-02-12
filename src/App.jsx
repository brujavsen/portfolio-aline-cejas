import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import swal from 'sweetalert';

function App() {

  const gitLink = "https://github.com/brujavsen/portfolio-aline-cejas";

  const handleClick = (e, url) => {
    e.preventDefault();
    swal({
        title: "Deseja continuar?",
        text: "Acabas de hallar un link al repositorio de GitHub, ¿deseas continuar?",
        icon: "warning",
        buttons: true,
    }).then((willRedirect) => {
        if (willRedirect) {
            window.location.href = url;
        } else {
            swal("Você cancelou");
        }
    });
  };

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
      <p className='rights'>Website created by <a href={gitLink} onClick={e => handleClick(e, gitLink)} title='Link github repo'>Bruno</a>, all rights reserved. &copy; {year}</p>
    </div>
  )
}

export default App