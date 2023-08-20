import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import  data  from '../data/productos.json';
import '../components/style.css'
import Header from "../components/Header";

function Detail ()  {
    const params = useParams();
    const id = params?.id;
    const [producto, setProduct] = useState(null);
    
    useEffect(() => {
        if(!id) return;

        setTimeout(() => {
            const productos = [...data];
            const selectedProduct = productos.find(producto => producto.id === id);
            setProduct(selectedProduct);
        }, 500);
   
    }, [id]);

    return(
        <div className="fondo">
            <Header/>
            <main className="contenedor">
        <Card style={{ width: '18rem' }} className="tarjeta-detalle">
            { producto ? (
            <article key={producto.id}>
      <Card.Img className="detalle-prod" variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.precio}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
      </article>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
    </main>

        </div>
    )
}
export default Detail