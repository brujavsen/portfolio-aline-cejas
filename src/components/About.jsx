import swal from "sweetalert";

const About = () => {

  const cv = "/cv-aline.pdf";

  const handleClick = (e) => {
    e.preventDefault();
      swal({
          title: "Deseja continuar?",
          text: "Você será redirecionado para meu currículo.",
          icon: "warning",
          buttons: true,
      }).then((willRedirect) => {
          if (willRedirect) {
              window.location.href = cv;
          } else {
              swal("Você cancelou");
          }
      });
  };

  return (
    <>
      <article className="about">
        <div className="about__info">
          <h1>Oi! Meu nome é <span>Aline Custódio Cejas</span></h1>
          <p>
            Sou aficionada por tudo que envolva
            design e arte, me entrego em cada
            projeto e busco sempre inovar em
            todos. <br />
            Criatividade não é um problema para
            mim, pois mesmo se às vezes não a
            tenho facilmente, procuro sempre
            alternativas para estimulá-la!
          </p>
          <div className="btn">
            <a href={cv} onClick={handleClick}>Meu Currículo</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
