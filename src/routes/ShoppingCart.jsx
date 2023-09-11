import React, { useEffect, useState } from 'react';
import { ADD_TO_CART, CLEAR_CART, REMOVE_ONE_FROM_CART } from "../Types/Types";
import '../components/style.css'
import { useAppContext } from '../components/Context';

const ShoppingCart = () => {
const { REMOVE_ONE_FROM_CART, CLEAR_CART} = useAppContext()

  return (
    <div>
    <h2>Carrito de Compras</h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          <p>{item.título}</p>
          <p>Price: {item.precio}</p>
          <button onClick={() =>REMOVE_ONE_FROM_CART()}>Eliminar</button>
          <Link to='/checkout'>Continua</Link>
        </li>
      ))}
    </ul>
    <button onClick={() =>CLEAR_CART()}>Vaciar Carrito</button>
  </div>
              );
            }
            
export default ShoppingCart

 
