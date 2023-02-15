import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { arrayProductos } from '../scripts/api';

function ItemDetailContainer() {

  const {idProducto} = useParams()
  const elementoEncontrado = arrayProductos.find((elemento) => elemento.id === idProducto)

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false}
      closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <ItemDetail element={elementoEncontrado}/>
    </>
  )
}

export default ItemDetailContainer