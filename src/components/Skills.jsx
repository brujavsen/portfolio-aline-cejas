import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiCanva  } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <article className="skills flex">
        <h2 id="skills">Habilidades</h2>
        <ul>
          <li><SiAdobeillustrator />Adobe Illustrator</li>
          <li><SiAdobephotoshop />Adobe Photoshop</li>
          <li><SiAdobeindesign />Adobe InDesign</li>
          <li><SiCanva />Canva</li>
          <li><IoLogoFigma />Figma</li>
        </ul>
      </article>
    </>
  );
};

export default Skills;
