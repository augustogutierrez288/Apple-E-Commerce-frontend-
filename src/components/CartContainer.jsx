import { ToastContainer } from 'react-toastify';
import { useCartContext } from '../context/CartContext';
import { ConsBtnBuyNone, DetailProducts } from './IsProductInCart';
import Cart from './Cart';

function CartContainer() {
    const {cartList, deleteCart, isProduct, totalAmount, price} = useCartContext()


    return (
        <div className='container-cart'>
            <div className='section-colour-cart'>
            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            <h2>Carrito de Compras</h2>
                <div className='articles-cart-container'>
                {isProduct ? cartList.map((cartProduct) => <div className='article-cart'  key={cartProduct.id}><Cart productCart={cartProduct}/></div> ) : <h4>Carrito de Compras Vacio...</h4>}
                </div>
                <div className='cons-detail-cart'>
                    {isProduct ? <DetailProducts totalAmount={totalAmount} price={price} deleteCart={deleteCart}/> : <ConsBtnBuyNone/>}
                </div>
            </div>
        </div>

  )
}

export default CartContainer