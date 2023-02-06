import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cargador } from './Item';
import ItemList from './ItemList';
import { gFetch } from '../scripts/api';

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()

  useEffect(() =>{
    if(idCategoria){
      gFetch()
      .then(response => setProductos(response.filter((producto) => producto.category === idCategoria)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }else{
      gFetch()
          .then(response => setProductos(response))
          .catch(error => console.log(error))
          .finally(() => setLoading(false))
    }
  }, [idCategoria])
  
  

  return (
    <main>
      { loading ? < Cargador/> : <ItemList array = {productos} /> }
    </main>
  )
}

export default ItemListContainer
