import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Menu from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './css/style.css';

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <Menu />
          <Routes>
            <Route path='/' element= {<ItemListContainer />}/>
            <Route path='/category/:idCategory' element= {<ItemListContainer />}/>  
            <Route path='/product/:idProducto' element= {<ItemDetailContainer/>}/>
            <Route  path='/cart' element={ <CartContainer />  } /> 
            <Route path='*' element= { <Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </CartContextProvider>
      </BrowserRouter>
  )
}

export default App
