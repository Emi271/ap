import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)
  return (
    <div className='d-flex justify-content-around align-items-center'>
        <img src={item.imagen} alt={item.título} width={'150rem'}/>
        <p className='text-white'>{item.título}</p>
        <p className='text-white'>{item.precio}</p>
        <p className='text-white'>Cantidad: {item.quantity}</p>
        <p className='text-white'>Sub total: ${item.quantity *item.precio}</p>
        <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>Eliminar</button>

    </div>
  )
}

export default CartItem