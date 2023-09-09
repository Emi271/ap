import Home from './routes/home';
import Detail from './routes/DetalleProducto';
import MostrarProductos from './routes/Productos';
import PersonajesList from './routes/Personajes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './components/Context';

function App()
{
  return (
 <BrowserRouter>
 <AppProvider>
 <Routes>
  <Route exact path='/' element={<Home/>} />
  <Route exact path='/detalle/:id' element={<Detail/>} />
  <Route exact path='/productos' element={<MostrarProductos/>} />
  <Route exact path='/personajes' element={<PersonajesList/>} />
 </Routes>
 </AppProvider>
 </BrowserRouter>
      
  );
}

export default App;
