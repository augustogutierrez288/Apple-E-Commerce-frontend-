import React from 'react'
import cart from '../../assets/carrito-de-compras.png';
import {useCartContext} from '../../context/CartContext'

export function CartWidget1() {
  const {totalAmount} = useCartContext()
  return (
    <div className='container-carrito d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none'><img className='carrito' src={cart} alt="carrito" /><p>{totalAmount}</p></div>
  )
}

export function CartWidget2() {
  const {totalAmount} = useCartContext()
  return (
    <div className='container-carrito d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'><img className='carrito' src={cart} alt="carrito" /><p>{totalAmount}</p></div>
  )
}