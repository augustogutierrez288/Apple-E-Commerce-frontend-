import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useCartContext } from '../context/CartContext';

function CartContainer() {
    const {cartList} = useCartContext()
    return (
        <section>
            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            { cartList.map(cartProduct => (
                <article key={cartProduct.id}>
                    <img src={cartProduct.img} style={{width: 100}} />
                    Nombre: {cartProduct.name} - Cantidad: {cartProduct.amount} - Precio: {price}
                    <button className='btn btn-danger' onClick={deleteCart}></button>
                </article>
                
            ))}
        </section>

  )
}

export default CartContainer