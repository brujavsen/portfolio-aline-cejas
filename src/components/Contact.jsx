import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import swal from "sweetalert";

const Contact = () => {

  const linkedin = "https://www.linkedin.com/in/alinecejas/";
  const behance = "https://www.behance.net/alinecejas/";

  const handleClick = (e, url, site) => {
    e.preventDefault();
    swal({
        title: "Deseja continuar?",
        text: "Você será redirecionado para minha conta de " + site,
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

  return (
    <>
        <article className='contact flex'>
          <h2 id="contact">Contato</h2>
          <div className="social">
            <a href={linkedin} onClick={e => handleClick(e, linkedin, "LinkedIn")} title="Conta de LinkedIn"><FaLinkedinIn /> alinecejas</a>
            <a href={behance} onClick={e => handleClick(e, behance, "Behance")} title="Conta de Behance"><FaBehance />alinecejas</a>
            <p title="Meu email"><MdEmail />alinecejas@gmail.com</p>
          </div>
        </article>
    </>
  )
}

export default Contact