import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext';
import Cart from './Cart';

function CartContainer() {
    const {cartList, deleteCart, isProduct, totalAmount, price} = useCartContext()


    return (
        <main className='container-cart'>
            <section className='section-colour-cart'>
            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            <h4>Carrito de Compras</h4>
                <section className='articles-cart-container'>
                { cartList.map((cartProduct) => <article className='article-cart' key={cartProduct.id}><Cart productCart={cartProduct}/></article> )}
                </section>
                <div className='cons-detail-cart'>
                    <div className='detail-products'>
                        <p>TOTAL:</p>
                        <p>{totalAmount}</p>
                        <p>${price}</p>   
                    </div>
                    <div className='cons-btn-buy'>
                        {isProduct ? <><button onClick={deleteCart}>Vacias Carrito</button><button>Finalizar Compra</button></> : <Link to='/' className='v-a-i'><button>Carrito Vacio - Volver a Inicio</button></Link> }
                        
                    </div>
                </div>
            </section>
        </main>

  )
}

export default CartContainer