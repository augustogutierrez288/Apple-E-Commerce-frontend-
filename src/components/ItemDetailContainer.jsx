import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { arrayProductos } from '../scripts/api';

function ItemDetailContainer() {

  const {idProducto} = useParams()
  const elementoEncontrado = arrayProductos.find((elemento) => elemento.id === idProducto)

  return (
      <ItemDetail element={elementoEncontrado}/>
  )
}

export default ItemDetailContainer