import Home from './routes/home';
import Detail from './routes/DetalleProducto';
import MostrarProductos from './routes/Productos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
  return (
 <BrowserRouter>
 <Routes>
  <Route exact path='/' element={<Home/>} />
  <Route exact path='/detalle/:id' element={<Detail/>} />
  <Route exact path='/productos' element={<MostrarProductos/>} />
 </Routes>
 </BrowserRouter>
      
  );
}

export default App;
