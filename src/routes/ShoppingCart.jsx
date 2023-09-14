import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const ShoppingCart = () => {
  const  { cart, clearCart, total} = useContext(CartContext)

  return (
    <div>
      {cart.length ? 
      <div>
        {cart.map((item) => <CartItem key={item.id} item={item}/> )}
        <p>Total a pagar: ${total()}</p>
        <div>
            <Button onClick={() => clearCart()} className="btn btn-danger">Vaciar Carrito</Button>
            <Button className='btn btn-dark'><Link to='/checkout'>Terminar compra</Link></Button>
          </div>
</div> : <div>
  <h3> Tu carrito está vacío!</h3> 
  <Link className='btn btn-dark' to='/productos'>Ir a ver productos</Link>
    </div>}
 </div>
  )
}

export default ShoppingCart