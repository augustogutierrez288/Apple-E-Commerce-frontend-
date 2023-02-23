import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

function ItemCount({ initial= 1, stock= 10, onAdd}){
    const {setIsProduct} = useCartContext()
    const [count, setCount ]= useState(initial)
    const [btnCart, setBtnCart] = useState(true)
    
    
    function OnStock(){
        return(
            <div className='container-buttons'>
                {btnCart ? <button className='btn-compra' onClick={onAddCart}>Añadir al Carrito</button> : <><Link to='/cart'><button className='btn-compra'>Ver Carrito</button></Link> <button className='btn-compra' onClick={onAddCart}>Añadir al Carrito</button></>}
            </div> 
        )
    }

    function OffStock(){
        return(
            <div className='container-buttons'>
                <Link to='/'><button className='btn-compra'>Volver al Inicio</button></Link>
            </div> 
        )
    }

    function OnContainerCount(){
        return(
            <>
                <div className='item-count'>
                    <button className='btn btn-info' onClick={sumarProduc} >+</button><span>{count}</span><button className='btn btn-danger' onClick={restarProduc} >-</button>
                </div>
                <OnStock/>
            </>
        )
    }

    function sumarProduc(){
        if(count < stock){
            setCount(count + 1)
        }
    }
    function restarProduc(){
        if(count > initial){
            setCount(count - 1)
        }
    }
    const onAddCart = ()=>{
       onAdd(count)
       setBtnCart(false)
       setIsProduct(true)     
    }

    return(
        <div className="container-item-count">
            {stock > 0 ? <OnContainerCount/> : <OffStock/>}
        </div>
    )
}

export default ItemCount