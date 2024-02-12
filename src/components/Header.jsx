import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import {Link, animateScroll as scroll} from 'react-scroll';

const Header = () => {
    const [activeBtn, setActiveBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setActiveBtn(true);
            } else {
                setActiveBtn(false);
            }
        };

        // Agregar un event listener para el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Eliminar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const closeMenu = () => {
        document.querySelector('#check').checked = false;
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <header className="header">
            <div className="logo">
                <p>Aline Cejas</p>
                <span>Designer e Ilustradora</span>
            </div>

            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <MdOutlineMenu id="menu-icon"/>
                <IoMdClose id="close-icon"/>
            </label>
            <nav className="nav">
                <a href="#skills" onClick={closeMenu}>Habilidades</a>
                <a href="#proyects" onClick={closeMenu}>Projetos</a>
                <a href="#contact" onClick={closeMenu}>Contato</a>
            </nav>
            
            {activeBtn ? (
                <Link onClick={scrollToTop} className="scroll-to-top" to='#' spy={true} type='button' smooth={true} offset={0} duration={500}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                </Link>
            ): ''}
        </header>
    )
}

export default Header