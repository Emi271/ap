import Home from './routes/home';
import Detail from './routes/DetalleProducto';
import MostrarProductos from './routes/Productos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './components/context';

function App()
{
  return (
 <BrowserRouter>
 <Context.Provider>
 <Routes>
  <Route exact path='/' element={<Home/>} />
  <Route exact path='/detalle/:id' element={<Detail/>} />
  <Route exact path='/productos' element={<MostrarProductos/>} />
 </Routes>
 </Context.Provider>
 </BrowserRouter>
      
  );
}

export default App;
