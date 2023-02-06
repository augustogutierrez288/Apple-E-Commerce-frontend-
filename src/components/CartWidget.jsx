import React from 'react'
import { useState } from 'react';
import carrito from '../assets/carrito-de-compras.png';

export function CartWidget1() {

    const [count, setCount] = useState(0)
    function sumadorCarrito(){
        setCount(count + 1)
    }

  return (
    <div className='container-carrito d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none'><img onClick={sumadorCarrito} className='carrito' src={carrito} alt="carrito" /><span className='cantidad'>{count}</span></div>
  )
}

export function CartWidget2() {

  const [count, setCount] = useState(0)
  function sumadorCarrito(){
      setCount(count + 1)
  }

return (
  <div className='container-carrito d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'><img onClick={sumadorCarrito} className='carrito' src={carrito} alt="carrito" /><span className='cantidad'>{count}</span></div>
)
}