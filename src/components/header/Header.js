import React from "react";
import './Header.css'
import logo from '../../image/Logo.png'
import logoWhite from '../../image/Logo White.png'

const Header = () => {
  return (
    <nav class="navbar col-12 navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  
    <a class="navbar-brand col-3" href="#" id="textNavbar"><img src={logoWhite}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav ">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste1" id="textNavbar">Quem somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste2" id="textNavbar">Biografia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste3" id="textNavbar">Missão</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste4" id="textNavbar">Visão</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste5" id="textNavbar">Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste6" id="textNavbar">Serviços</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#teste7" id="textNavbar">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header;