import Home from './routes/home';
import Detail from './routes/DetalleProducto';
import MostrarProductos from './routes/Productos';
import PersonajesList from './routes/Personajes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './routes/ShoppingCart';
import { CartProvider } from './context/CartContext';
import Checkout from './routes/Checkout'; 

function App()
{
  return (
 <BrowserRouter>
 <CartProvider>
 <Routes>
  <Route exact path='/' element={<Home/>} />
  <Route exact path='/detalle/:id' element={<Detail/>} />
  <Route exact path='/productos' element={<MostrarProductos/>} />
  <Route exact path='/personajes' element={<PersonajesList/>} />
  <Route exact path='/cart' element={<ShoppingCart/>} />
  <Route exact path='/checkout' element={<Checkout/>}/> 
 </Routes>
 </CartProvider>
 </BrowserRouter>
      
  );
}

export default App;
