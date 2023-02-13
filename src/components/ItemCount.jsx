import { useState } from "react"

function ItemCount({initial=1, stock= 10, onAdd}){
    const [count, setCount] = useState(initial)
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
    const onAddCard = ()=>{
       onAdd(count)        
    }

    return(
        <div className="container-item-count">
           <div className='item-count'>
                <button className='btn btn-info' onClick={sumarProduc()} >+</button><span>{count}</span><button className='btn btn-danger' onClick={restarProduc()} >-</button>
            </div>
            <div className='container-buttons'>
                <button className='btn-compra' onClick={onAddCard()}>Añadir al Carrito</button>
                <button className='btn-compra'>Comprar</button>
            </div> 
        </div>
    )
}

export default ItemCount