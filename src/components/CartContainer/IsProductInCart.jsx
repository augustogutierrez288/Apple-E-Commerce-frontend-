import { Link } from "react-router-dom"

export function DetailProducts({totalAmount, price, deleteCart}){
    return(
        <>
            <div className='detail-products'>
                <p>TOTAL:</p>
                <p>{totalAmount}</p>
                <p>${price}</p>   
            </div>
            <div className='cons-btn-buy'>
                <button onClick={deleteCart}>Vaciar Carrito</button>
                <Link className='l-b-c' to='/form-cart'><button>Finalizar Compra</button></Link>
            </div>
        </>
        
    )
}
export function ConsBtnBuyNone(){
    return(
        <Link to='/' className='v-a-i'><button>Volver a Inicio</button></Link>
    )
}