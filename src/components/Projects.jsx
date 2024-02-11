import { useEffect, useState } from "react"
import ProjectsApi from "../helpers/ProjectsApi";

const Projects = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actualProject, setActualProject] = useState('logotipo');

   // Función para cambiar el proyecto actual
  const changePy = (namePy) => {
    setActualProject(namePy);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/projetos.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
        <article className='proyects flex'>
          <h2 id="proyects">Projetos</h2>
          <nav className="nav-py">
            <button className={actualProject === 'logotipo' && 'active'} onClick={()=> changePy('logotipo')}>Logotipos</button>
            <button className={actualProject === 'posts' && 'active'} onClick={()=> changePy('posts')}>Posts redes sociais</button>
            <button className={actualProject === 'designs' && 'active'} onClick={()=> changePy('designs')}>Cartaz e desenhos</button>
          </nav>
          <section className="proyect-cnt">
            {actualProject === 'logotipo' && data.logotipo && <ProjectsApi projects={data.logotipo} />}
            {actualProject === 'posts' && data.posts && <ProjectsApi projects={data.posts} />}
            {actualProject === 'designs' && data.posts && <ProjectsApi projects={data.designs} />}
          </section>
        </article>
    </>
  )
}

export default Projects