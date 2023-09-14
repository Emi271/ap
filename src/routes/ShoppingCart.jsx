import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import '../components/style.css'
import Header from '../components/Header'

const ShoppingCart = () => {
  const  { cart, clearCart, total} = useContext(CartContext)

  return (
    <div>
          <div className="fondo">
    <Header/>
    <main className=" px-0 mx-0 justify-content-center">
      {cart.length ? 
      <div>
        {cart.map((item) => <CartItem key={item.id} item={item}/> )}
        <p className='text-white'>Total a pagar: ${total()}</p>
        <div>
            <Button onClick={() => clearCart()} className="btn btn-danger">Vaciar Carrito</Button>
            <Button className='btn btn-dark'><Link to='/checkout'>Terminar compra</Link></Button>
          </div>
</div> : <div>
  <h3 className='text-white'> Tu carrito está vacío!</h3> 
  <Link className='btn btn-dark' to='/productos'>Ir a ver productos</Link>
    </div>}
    </main>
    </div>

 </div>
  )
}

export default ShoppingCart