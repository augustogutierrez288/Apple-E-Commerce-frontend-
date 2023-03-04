import { Link } from "react-router-dom"


export function OnStock({btnCart, onAddCart}){
    return(
        <div className='container-buttons'>
            {btnCart ? <button className='btn-compra' onClick={onAddCart}>Añadir al Carrito</button> : <><Link to='/cart'><button className='btn-compra'>Ver Carrito</button></Link> <button className='btn-compra' onClick={onAddCart}>Añadir al Carrito</button></>}
        </div> 
    )
}

export function OffStock(){
    return(
        <div className='container-buttons'>
            <Link to='/'><button className='btn-compra'>Volver al Inicio</button></Link>
        </div> 
    )
}

export function OnContainerCount({sumarProduc, count, restarProduc, btnCart, onAddCart}){
    return(
        <>
            <div className='item-count'>
                <button className='btn btn-danger' onClick={restarProduc} >-</button><span>{count}</span><button className='btn btn-info' onClick={sumarProduc} >+</button>
            </div>
            <OnStock btnCart={btnCart} onAddCart={onAddCart}/>
        </>
    )
}