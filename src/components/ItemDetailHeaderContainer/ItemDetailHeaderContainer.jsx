import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetailHeader from '../ItemDetailHeader/ItemDetailHeader';


function ItemDetailHeaderContainer() {
    const [ product, setProduct ] =  useState({})
    const {idProducto} = useParams()
  
    useEffect(()=>{
        const db = getFirestore() 
        const query = doc(db, 'ProductosDestacados', idProducto)
        getDoc(query)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch((err) => console.log(err))
    },[idProducto])

    return (
        <>
            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <ItemDetailHeader element={product}/>
        </>
    )
}

export default ItemDetailHeaderContainer