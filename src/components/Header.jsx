import { PiPencilCircle } from "react-icons/pi";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <PiPencilCircle /> Aline Cejas
            </div>
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