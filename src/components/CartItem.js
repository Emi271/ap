import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)
  return (
    <div className='d-flex justify-content-around align-items-center'>
        <img src={item.imagen} alt={item.título} width={'150rem'}/>
        <p>{item.titulo}</p>
        <p>{item.precio}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Sub total: ${item.quantity *item.precio}</p>
        <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>Eliminar</button>

    </div>
  )
}

export default CartItem