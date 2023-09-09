import React from "react";
import Header from "../components/Header";
import presentacion from "../img/presentacion.webp"
import '../components/style.css'
function Home () {
    return(
    <div className="fondo">
        <Header/>
            <main>
                <div><h2 className="titulo">High School DXD</h2></div>
                 <div><img src={presentacion} className="imagen-home" alt={presentacion} ></img></div>
            </main>
        </div>)}
export default Home