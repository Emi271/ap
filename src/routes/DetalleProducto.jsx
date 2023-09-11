import React, { useState, useEffect } from 'react';
import { getFirestore, doc,  getDoc } from 'firebase/firestore';
import '../components/style.css';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
const [item, setItem] = useState({});
const { id } = useParams()
const { addToCart } = useAppContext()

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
  
  const handleAddToCart = () => {
    addToCart(item);
  };

    return ( 
        <div>
           <p>{item.título}</p>
      <p>Price: {item.precio}</p>
     <img alt={item.imagen} src={item.imagen} className='card-img'/>
     <button onClick={addToCart}> Comprar </button>
        </div>
    )}

export default DetalleProducto