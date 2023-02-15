import React from 'react'
import { useCartContext } from '../context/CartContext'

function Cart({productCart}) {
    const {deleteCart, price} = useCartContext()
    return (
        <main>
            <section>
                <section>
                    <article>
                        <img src={productCart.img} alt={productCart.name} />
                        <p>{productCart.name}</p>
                        <div>
                            <button className='btn btn-success'>+</button>
                            <span>{productCart.amount}</span>
                            <button className='btn btn-danger'>-</button>
                        </div>
                        <p>{price}</p>
                        <button className='btn btn-danger'><i class="bi bi-trash-fill"></i>Eliminar</button>
                    </article>
                </section>
                <div> 
                    <p>Total de Productos</p>
                    <p>cantidad total</p>
                    <button className='btn btn-danger'><i class="bi bi-info-circle-fill"></i>Vaciar Carrito</button>
                </div>
            </section>
        </main>
    )
}

export default Cart