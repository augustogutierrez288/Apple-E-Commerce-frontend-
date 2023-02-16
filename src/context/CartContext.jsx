import { createContext, useContext, useEffect, useState } from "react";
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
    const [isProduct, setIsProduct] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

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

        setPrice(price + newProduct.price * newProduct.amount);
        setTotalAmount(totalAmount + newProduct.amount)
    };

    function deleteCart(){
        setCartList([]);
        deleteNotify();
        setIsProduct(false);
        setPrice(0)
        setTotalAmount(0)
    };

    const addCartItem = (item) => {
        const product = cartList.find((product) => product.id === item.id);
        if (product) {
          const newCart = cartList.map((product) =>
            product.id === item.id
              ? { ...product, amount: product.amount + 1 }
              : product
          );
          setCartList(newCart);
        } else {
          setCartList([...cartList, { ...item, amount: 1 }]);
        }
        setPrice(price + item.price);
        setTotalAmount(totalAmount + 1)
      };

    const deleteItem = (item) => {
        const productElement = cartList.find((product) => product.id === item.id);
        if (productElement) {
            const newCart = cartList.map((product) =>{
                if (product.id === productElement.id) {
                    ({ ...productElement, amount: product.amount - 1}) 
                    if(product.amount <= 1){
                        btnDeleteItem(item)
                    }
                }else{
                    productElement
                }})
            setCartList(newCart);
        }else {
            setCartList([...cartList, { ...item, amount: 1 }]);
        }
        setPrice(price - item.price);
        setTotalAmount(totalAmount - 1)
    };

    function btnDeleteItem(item){
        const result = cartList.filter(product => product.id !== item.id)
        setCartList(result)
        setTotalAmount(totalAmount - item.amount);
        setPrice(price - item.price * item.amount);
        if (cartList.length < 1) {
            setIsProduct(false)
            deleteNotify();
        }else{
            setIsProduct(true)
        }
    }


    return(
        <CartContext.Provider value={{addCart, deleteCart, cartList, price, isProduct, setIsProduct, totalAmount, deleteItem, addCartItem, btnDeleteItem}}>
            {children}
        </CartContext.Provider>
    )
}