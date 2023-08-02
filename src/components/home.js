import React from "react";
import Header from "./Header";
import presentacion from "../img/presentacion.webp"
import Bienvenida from "./ItemListContainer";

function Home () {
    return(
        <div>
            <Header/>
            <Bienvenida saludar={"Bienvenido!!"}/>
            <main>
                <div>
                    <h2>High School DXD</h2></div>
                <div>
                    <img src={presentacion} className="imagen-home"></img>
                </div>
            </main>
        
        </div>
            

   
    )
};

export default Home