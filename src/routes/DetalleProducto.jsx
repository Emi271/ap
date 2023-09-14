import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc,  getDoc } from 'firebase/firestore';
import '../components/style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { CartContext } from '../context/CartContext';

const DetalleProducto = () => {
const [item, setItem] = useState({});
const { id } = useParams()
const [quantityAdded, setQuantityAdded] = useState('')
const { addItemToCart} = useContext(CartContext)
const onAdd = (quantity) => {
  setQuantityAdded(quantity)
  addItemToCart(item, quantity)
}
useEffect(() => {
    const db = getFirestore();
    const docReference = doc(db, 'items', id)
    getDoc(docReference)
      .then((querySnapshot) => {
        const data = querySnapshot.data();
        const itemAdapted = { id: doc.id, ...data };
        setItem(itemAdapted);
      });
  }, [id]);
  

    return ( 
        <div className='d-flex flex-column align-items-center'>
           <p>{item.título}</p>
      <p>Price: {item.precio}</p>
     <img alt={item.imagen} src={item.imagen} className='card-detalle-img'/>
     { quantityAdded === '' ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
     : <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link>}
        </div>
    )}

export default DetalleProducto