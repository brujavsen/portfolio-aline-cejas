import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
        <article className='contact flex'>
          <h2 id="contact">Contato</h2>
          <div className="social">
            <p><FaLinkedinIn /> alinecejas</p>
            <p><FaBehance />alinecejas</p>
            <p><MdEmail />alinecejas@gmail.com</p>
          </div>
        </article>
    </>
  )
}

export default Contact