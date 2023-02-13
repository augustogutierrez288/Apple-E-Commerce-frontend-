import React from 'react'
import { useCartContext } from '../context/CartContext'

function CartContainer() {
    const {cartList} = useCartContext()
  return (
        <section>
            { cartList.map(product => (
                <article key={product.id}>
                    <img src={product.img} style={{width: 100}} />
                    Nombre: {product.name} - Cantidad: {product.amount} - Precio: {producto.price}
                </article>
                
            ))}
        </section>

  )
}

export default CartContainer