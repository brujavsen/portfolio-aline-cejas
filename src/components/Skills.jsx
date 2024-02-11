import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiCanva  } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <article className="skills flex">
        <h2 id="skills">Competências</h2>
        <section>
          <h3>Software</h3>
          <ul>
            <li><SiAdobeillustrator />Adobe Illustrator</li>
            <li><SiAdobephotoshop />Adobe Photoshop</li>
            <li><SiAdobeindesign />Adobe InDesign</li>
            <li><SiCanva />Canva</li>
            <li><IoLogoFigma />Figma</li>
          </ul>
        </section>
        <hr />
        <section>
          <h3>Competências</h3>
          <ul>
            <li>Fácil adaptação</li>
            <li>Dinamicidade</li>
            <li>Comprometimento</li>
            <li>Criatividade</li>
            <li>Proatividade</li>
            <li>Trabalho em equipe</li>
          </ul>
        </section>
        <hr />
        <section>
          <h3>Idiomas</h3>
          <ul>
            <li>Espanhol Avançado</li>
            <li>Inglês Básico</li>
            <li>Português Nativo</li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Skills;
