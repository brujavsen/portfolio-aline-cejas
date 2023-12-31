import { PiPencilCircle } from "react-icons/pi";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <PiPencilCircle /> Aline Cejas
            </div>

            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <MdOutlineMenu id="menu-icon"/>
                <IoMdClose id="close-icon"/>
            </label>
            <nav className="nav">
                <a href="#about">Sobre mim</a>
                <a href="#skills">Habilidades</a>
                <a href="#proyects">Projetos</a>
                <a href="#contact">Contato</a>
            </nav>
        </header>
    )
}

export default Header