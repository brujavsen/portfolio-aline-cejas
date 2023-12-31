const About = () => {
  return (
    <>
      <article className="about">
        <img
          className="about__banner"
          src="./banner-about.png"
          alt="banner-about-me"
        />
        <div className="about__info">
          <h2>Sobre mim</h2>
          <div className="intro">
            <p>Aline Custódio Cejas</p>
            <span>Graphic Designer</span>
          </div>
          <p>
            Possuo um grande interesse pela área de Design Gráfico e me envolvo
            por inteiro em cada processo. Busco sempre desenvolver novas
            habilidades e trazer ideias inovadoras para cada um dos meus
            projetos
          </p>
          <div className="btns">
            <a href="https://www.youtube.com/watch?v=DCkJ5lGPqFs">Meu Currículo</a>
            <a href="https://www.youtube.com/watch?v=s9oQRKsROF8">Meus Projetos</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
