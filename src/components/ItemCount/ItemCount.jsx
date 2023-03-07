import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { OffStock, OnContainerCount } from "./StockItemCount"

function ItemCount({ initial= 1, stock= 10, onAdd}){
    const {setIsProduct} = useCartContext()
    const [count, setCount ]= useState(initial)
    const [btnCart, setBtnCart] = useState(true)

    const {setOnForm } = useCartContext()

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
       setOnForm(true)     
    }

    return(
        <div className="container-item-count">
            {stock > 0 ? <OnContainerCount sumarProduc={sumarProduc} count={count} restarProduc={restarProduc} btnCart={btnCart} onAddCart={onAddCart} /> : <OffStock/>}
        </div>
    )
}

export default ItemCount