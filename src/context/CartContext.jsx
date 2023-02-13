import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export function useCartContext(){
    useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addCart(newProduct){
        setCartList([...cartList, newProduct])
    }

    return(
        <CartContext.Provider value={{addCart, cartList }}>
            {children}
        </CartContext.Provider>
    )
}