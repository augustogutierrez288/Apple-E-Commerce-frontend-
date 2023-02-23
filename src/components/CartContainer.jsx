import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext';
import Cart from './Cart';

function CartContainer() {
    const {cartList, deleteCart, isProduct, totalAmount, price} = useCartContext()

    function DetailProducts(){
        return(
            <>
                <div className='detail-products'>
                    <p>TOTAL:</p>
                    <p>{totalAmount}</p>
                    <p>${price}</p>   
                </div>
                <div className='cons-btn-buy'>
                    <button onClick={deleteCart}>Vacias Carrito</button>
                    <button>Finalizar Compra</button>
                </div>
            </>
            
        )
    }
    function ConsBtnBuyNone(){
        return(
            <Link to='/' className='v-a-i'><button>Volver a Inicio</button></Link>
        )
    }

    return (
        <div className='container-cart'>
            <div className='section-colour-cart'>
            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            <h4>Carrito de Compras</h4>
                <div className='articles-cart-container'>
                {isProduct ? cartList.map((cartProduct) => <div className='article-cart'  key={cartProduct.id}><Cart productCart={cartProduct}/></div> ) : <h4>Carrito de Compras Vacio...</h4>}
                </div>
                <div className='cons-detail-cart'>
                    {isProduct ? <DetailProducts/> : <ConsBtnBuyNone/>}
                </div>
            </div>
        </div>

  )
}

export default CartContainer