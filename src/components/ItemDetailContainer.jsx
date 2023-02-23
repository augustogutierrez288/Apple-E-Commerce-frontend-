import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [ producto, setProducto ] =  useState({})
  const {idProducto} = useParams()
  
  useEffect(()=>{
    const db = getFirestore() 
    const query = doc(db, 'Productos', idProducto)
    getDoc(query)
    .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
    .catch((err) => console.log(err))
  }, [producto])

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false}
      closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <ItemDetail element={producto}/>
    </>
  )
}

export default ItemDetailContainer