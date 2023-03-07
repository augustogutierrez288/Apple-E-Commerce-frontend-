import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemHeader from '../ItemHeader/ItemHeader';

function ItemHeaderContainer() {
    const [productsHeader, setProductsHeader] = useState([])
    const [OneProduct, setOneProduct ] =  useState({})
    const [statud, setStatud] = useState(true)
    const {idCategory} = useParams()

    useEffect(()=>{
        const db = getFirestore() 
        const queryCollections = collection(db, 'ProductosDestacados')
        const getQuery = doc(db, 'ProductosDestacados','1NI4kbrew71d8AXxWzRk')
        if (idCategory) {
            setStatud(false)
            const queryFilter = query(queryCollections, where('category','==', idCategory))
            getDocs(queryFilter)
            .then((resp) => {setProductsHeader( resp.docs.map(product => ({ id: product.id, ...product.data() } ) ))})
            .catch((err) => console.error(err))
        } else {
            setStatud(true)
            getDoc(getQuery)
            .then(resp => setOneProduct({id: resp.id, ...resp.data()}))
            .catch(err => console.error(err))
        }
      }, [idCategory])

  return (
    <>
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <h2 className='productHeader'>Producto Destacado</h2>
        <div className="rows">
            {statud ? <ItemHeader product={OneProduct}/> : productsHeader.map((product)=> <ItemHeader key={product.id} product={product}/>)}
        </div>
    </>
  )
}

export default ItemHeaderContainer