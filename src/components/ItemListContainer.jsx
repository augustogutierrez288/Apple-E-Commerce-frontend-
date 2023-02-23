import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import ItemCharger from './ItemCharger';

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategory} = useParams()


  useEffect(()=>{
    setLoading(true)
    const db = getFirestore() 
    const queryCollections = collection(db, 'Productos')

    if (idCategory) {
        const queryFilter = query(queryCollections, where('category','==', idCategory))
        getDocs(queryFilter)
        .then((resp) => {setProducts( resp.docs.map(product => ({ id: product.id, ...product.data() } ) ))})
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    } else {
        getDocs(queryCollections)
        .then(resp => setProducts( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))      
    }
  }, [idCategory])

  return (
    <div className='container-fluid'>
        { loading ? < ItemCharger/> : <ItemList array = {products} /> }
    </div>
  )
}

export default ItemListContainer
