import CardWidget from "../CardWidget/CardWidget"
import LogoImg from "./img/logo.png"

import "./NavBar.css"

const NavBar = () => {
    return (
        <section className="hero is-warning is-medium">
            <div className="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img className="logo" src={LogoImg} alt="Logo"/>
                            </a>
                            <span classNameName="navbar-burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item categorias">
                                    Especias
                                </a>
                                <a className="navbar-item categorias">
                                    Hiervas
                                </a>
                                <a className="navbar-item categorias">
                                    Deshidratados
                                </a>
                            </div>
                        </div>
                    </div>
                    <CardWidget/>
                </nav>
            </div>
            
        </section> 
    )
}

export default NavBar