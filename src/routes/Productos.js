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
            <main className="grid">
               {productos.map((p) =>{
                return (
                    <Card style={{ width: '18rem' }}>
                        <article key={p.id}>
                    <Card.Img className="tarjeta-img" variant="top" src={p.imagen} alt={p.nombre} />
                    <Card.Body>
                      <Card.Title>{p.nombre}</Card.Title>
                      <Card.Text>{p.precio}</Card.Text>
                      <Link to={`/detalle/${p.id}`}><Button variant="primary">Ver producto</Button></Link>
                    </Card.Body>
                    </article>
                  </Card>
                )
               })} 
            </main>
        </div>
    )
}

export default MostrarProductos