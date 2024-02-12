import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiCanva  } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <article className="skills">
        <h2 id="skills">Habilidades</h2>
        <div className="flex">
          <section>
            <h3>Software</h3>
            <ul>
              <li><SiAdobeillustrator />Illustrator</li>
              <li><SiAdobephotoshop />Photoshop</li>
              <li><SiAdobeindesign />InDesign</li>
              <li><SiCanva />Canva</li>
              <li><IoLogoFigma />Figma</li>
            </ul>
          </section>
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
          <section>
            <h3>Idiomas</h3>
            <ul>
              <li>Espanhol Avançado</li>
              <li>Inglês Básico</li>
              <li>Português Nativo</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};

export default Skills;
