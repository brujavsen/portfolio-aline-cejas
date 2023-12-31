import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
        <article className='contact flex'>
          <h2 id="contact">Contato</h2>
          <div className="social">
            <a href="https://www.linkedin.com/in/alinecejas/" title="Conta de LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn /> alinecejas</a>
            <a href="https://www.behance.net/alinecejas/" title="Conta de Behance" target="_blank" rel="noreferrer"><FaBehance />alinecejas</a>
            <p title="Meu email"><MdEmail />alinecejas@gmail.com</p>
          </div>
        </article>
    </>
  )
}

export default Contact