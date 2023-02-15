import { useState } from "react"
import { Link } from "react-router-dom"

function ItemCount({ initial= 1, stock= 10, onAdd}){

    const [count, setCount ]= useState(initial)
    const [btnCart, setBtnCart] = useState(true)
    
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
    }

    return(
        <div className="container-item-count">
           <div className='item-count'>
                <button className='btn btn-info' onClick={sumarProduc} >+</button><span>{count}</span><button className='btn btn-danger' onClick={restarProduc} >-</button>
            </div>
            <div className='container-buttons'>
                {btnCart ? <button className='btn-compra' onClick={onAddCart}>Añadir al Carrito</button> : <><Link to='/cart'><button className='btn-compra'>Ver Carrito</button></Link> <button className='btn-compra' onClick={onAddCart}>Añadir al Carrito</button></> }
            </div> 
        </div>
    )
}

export default ItemCount