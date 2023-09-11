import React, { useState, useEffect } from 'react';
import { getFirestore, doc, query, getDocs, where } from 'firebase/firestore';
import '../components/style.css';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
const [item, setItem] = useState({});
const { id: itemId } = useParams

useEffect(() => {
    const db = getFirestore();
    const collection = doc(db, 'items');
    const filteredCollection = query(collection, where('id', '==', itemId));
  
    getDocs(filteredCollection)
      .then((querySnapshot) => {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        const itemAdapted = { id: doc.id, ...data };
        setItem(itemAdapted);
      });
  }, [itemId]);
  

    return ( 
        <div>
           <p>{item.título}</p>
      <p>Price: {item.precio}</p>
     <img alt='lala'>{item.imagen}</img>
        </div>
    )}
    

export default DetalleProducto;
