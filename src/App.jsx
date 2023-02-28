import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Menu from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetailHeaderContainer from './components/ItemDetailHeaderContainer';
import FormCart from './components/FormCart';
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
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
            <Route path='/flagship-product/:idProducto' element= {<ItemDetailHeaderContainer/>}/>
            <Route path='/form-cart' element= {<FormCart />}/> 
            <Route  path='/cart' element={ <CartContainer />  } /> 
            <Route path='/404' element= { <ErrorPage/>}/>
          </Routes>
          <Footer/>
        </CartContextProvider>
      </BrowserRouter>
  )
}

export default App
