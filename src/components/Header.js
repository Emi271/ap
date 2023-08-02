import React from "react";
import './style.css'
import logo from '../img/logo.png'
import CartWidget from "./CartWidget";
function Header () {
    return (
        <nav class="navbar">
    <div> <a href="../../index.html"><img src={logo} alt="logo" className="logo"/></a> </div>
<ul class="first-ul">
<li><a href="">Ver todos los personajes</a></li>
<li><a href="">Tienda</a></li>
<li><a href="">Galería de imágenes</a></li>
</ul>
<div class="navbar-iconos">
    <ul>
<li> <a href=""><i class="fa-regular fa-star"></i></a></li>
<li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
<li><a href=""><i class="fa-regular fa-user"></i></a></li>
</ul>
</div>
<CartWidget/>
</nav>
    )
};
export default Header