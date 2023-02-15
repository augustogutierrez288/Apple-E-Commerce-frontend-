import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

function notify(){
    return toast('Producto Añadido al Carrito', { position: "top-right", autoClose: 4000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",});
};
function deleteNotify(){
    return toast.error('Carrito de Compras Vacio', {position: "top-right", autoClose: 4000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",});
};

const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [price, setPrice] = useState(0)

    function addCart(newProduct){
        const producInCart = cartList.find((product) => product.id === newProduct.id);
        if (producInCart) {
            const newCart = cartList.map( (produc) =>
                produc.id === newProduct.id ? { ...produc, amount: produc.amount + newProduct.amount }: produc
            );
            setCartList(newCart);
            notify();
        } else {
            setCartList([...cartList, newProduct]);
            notify();
        }
        setPrice(price + newProduct.price * newProduct.amount)
    };

    function deleteCart(){
        setCartList([]);
        deleteNotify();
    };

    return(
        <CartContext.Provider value={{addCart, deleteCart, cartList, price}}>
            {children}
        </CartContext.Provider>
    )
}