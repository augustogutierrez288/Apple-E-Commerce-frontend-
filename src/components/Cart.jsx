import React from 'react'
import { useCartContext } from '../context/CartContext'

function Cart({productCart}) {

    const {deleteItem, addCartItem, btnDeleteItem} = useCartContext()

    return (
        <>
            <div className='cons-img'><img src={productCart.img} alt={productCart.name} /></div>
            <div className='cons-name'><p>{productCart.name}</p></div>
            <div className='cons-amount'>
                <button className='cons-btn display' onClick={()=>{deleteItem(productCart)}}>-</button>
                <p>{productCart.amount}</p>
                <button className='cons-btn2 display' onClick={()=>{addCartItem(productCart)}}>+</button>
            </div>
            <div className='cons-price'><p>${productCart.price * productCart.amount}</p></div>
            <button className='cons-btn' onClick={()=>{btnDeleteItem(productCart)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </>
    )
}

export default Cart