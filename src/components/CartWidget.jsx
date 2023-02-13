import React from 'react'
import carrito from '../assets/carrito-de-compras.png';

export function CartWidget1() {

  return (
    <div className='container-carrito d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none'><img className='carrito' src={carrito} alt="carrito" /></div>
  )
}

export function CartWidget2() {

return (
  <div className='container-carrito d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'><img className='carrito' src={carrito} alt="carrito" /></div>
)
}