import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import '../components/style.css'
import data  from '../data/productos.json'
import Header from "../components/Header";


function MostrarProductos() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(data);
    }, []);
    return(
        <div className="fondo">
            <Header/>
            <main className=" px-0 mx-0 justify-content-center">
            <div className="row  mx-auto mb-3 mt-3 justify-content-around">
               {productos.map((p) =>{
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 col-6">
                    <Card style={{ width: '18rem' }} className="h-100"> 
                        <article key={p.id}>
                    <Card.Img className="h-50" variant="top" src={p.imagen} alt={p.nombre} />
                    <Card.Body>
                      <Card.Title>{p.nombre}</Card.Title>
                      <Card.Text>{p.precio}</Card.Text>
                      <Link to={`/detalle/${p.id}`}><Button variant="primary">Ver producto</Button></Link>
                    </Card.Body>
                    </article>
                  </Card> 
                  </div>
                )
               })} 
                </div>
            </main>
        </div>
    )
}

export default MostrarProductos