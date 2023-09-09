import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import '../components/style.css';
import { useAppContext } from '../components/Context';

const DetalleProducto = ({id}) => {
const [item, setItem] = useState({});
const { setData } = useAppContext()

    useEffect(() =>{
        const db = getFirestore()
        const itemRef = doc(db, 'items', id);

        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
                setData(doc);
            }
        })
    }, [id , setData]);


    return ( 
        <div>
           <p>{item.título}</p>
      <p>Price: {item.precio}</p>
     <img alt='lala'>{item.imagen}</img>
        </div>
    )}
    

export default DetalleProducto;
