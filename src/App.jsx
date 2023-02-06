import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Menu from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element= {<ItemListContainer />}/>
        <Route path='/categoria/:idCategoria' element= {<ItemListContainer />}/>  
        <Route path='/producto/:idProducto' element= {<ItemDetailContainer/>}/>
        <Route path='*' element= { <Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
