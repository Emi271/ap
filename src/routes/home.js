import React from "react";
import Header from "../components/Header";
import presentacion from "../img/presentacion.webp"
import Bienvenida from "../components/ItemListContainer";
import '../components/style.css'
function Home () {
    return(
        <div className="fondo">
            <Header/>
            <Bienvenida saludar={"Bienvenido!!"}/>
            <main>
                <div>
                    <h2 className="titulo">High School DXD</h2></div>
                <div>
                    <img src={presentacion} className="imagen-home"></img>
                </div>
            </main>
        
        </div>
            

   
    )
};

export default Home