import React from 'react'
import { useState } from 'react';
import carrito from '../assets/carrito-de-compras.png';

function CartWidget() {
    const [count, setCount] = useState(0)
    function sumadorCarrito(){
        setCount(count + 1)
    }
  return (
    <div className='container-carrito'><img onClick={sumadorCarrito} className='carrito' src={carrito} alt="carrito" /><span className='cantidad'>{count}</span></div>
  )
}

export default CartWidget