import React from "react";
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg col-xs-12">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Dr. Marcelo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sobre nos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#teste1">Introducao</a>
                </li>
                <li><a className="dropdown-item" href="#teste2">Missao e Valores</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#teste3">Projetos</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;