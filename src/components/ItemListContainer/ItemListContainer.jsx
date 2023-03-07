import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import ItemCharger from '../ItemCharger/ItemCharger';
import DetailsIndex from '../DetailsIndex/DetailsIndex';
import ItemHeaderContainer from '../ItemHeaderContainer/ItemHeaderContainer';

function ItemListContainer() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategory} = useParams()


  useEffect(()=>{
    setLoading(true)
    const db = getFirestore() 
    const queryCollections = collection(db, 'Productos')
    const queryFilter = idCategory ? query(queryCollections, where('category','==', idCategory)) : queryCollections
    getDocs(queryFilter)
    .then((resp) => {setProducts( resp.docs.map(product => ({ id: product.id, ...product.data() } ) ))})
    .catch((err) => console.error(err))
    .finally(() => setLoading(false))
  }, [idCategory])


  return (
    <div className='container-fluid'>

        { loading ? < ItemCharger/> : <><ItemHeaderContainer/><ItemList array = {products} /><DetailsIndex/></> }

    </div>
  )
}

export default ItemListContainer
