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
    const [idOrder, setIdOrder] = useState("")
    const [onForm, setOnForm] = useState(true)

    //añade un elemento al carrito desde ItemDetail
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

    // Vacia el Carrito desde CartContainer
    function deleteCart(){
        setCartList([]);
        deleteNotify();
        setIsProduct(false);
        setPrice(0)
        setTotalAmount(0)
    };
    // Aumenta 1 cantidad mas del elemento ya cargado
    const addCartItem = (item) => {
        const product = cartList.find((product) => product.id === item.id);
        if (product && product.amount < product.stock) {
            const newCart = cartList.map((product) => product.id === item.id ? { ...product, amount: product.amount + 1 } : product);
            setCartList(newCart);
            setPrice(price + item.price);
            setTotalAmount(totalAmount + 1)
        }
    };
    // Elimina 1 cantidad mas del elemento ya cargado, si es menor a 1 lo elimina del array
    const deleteItem = (item) => {
        const productElement = cartList.find((product) => product.id === item.id);
        if (productElement) {
            const newCart = cartList.map((product) => product.id === productElement.id ? { ...product, amount: product.amount - 1} :product)
            setCartList(newCart);
        }else {
            setCartList([...cartList, { ...item, amount: 1 }]);
        }
        setPrice(price - item.price);
        setTotalAmount(totalAmount - 1)
        if(item.amount <= 1){
            btnDeleteItem(item)
        }
    };
    //Funcion para eliminar un elemento del carrito
    function btnDeleteItem(item){
        const result = cartList.filter(product => product.id !== item.id)
        setCartList(result)
        setTotalAmount(totalAmount - item.amount);
        setPrice(price - item.price * item.amount);
    }
    //Añade 1 elemento desde productos destacados 
    function addCartHeader(newProduct){
        const producInCart = cartList.find((product) => product.id === newProduct.id);
        if (producInCart) {
            const newCart = cartList.map( (produc) =>
                produc.id === newProduct.id ? { ...produc, amount: produc.amount + 1 }: produc
            );
            setCartList(newCart);
            notify();
        } else {
            setCartList([...cartList, newProduct]);
            notify();
        }
        setOnForm(true)
        setPrice(price + newProduct.price * newProduct.amount);
        setTotalAmount(totalAmount + newProduct.amount)
    };
    // Realiza un render condicional en el componente CartContainer dependiendo si hay productos en el carrito o array del carrito.
    useEffect(()=>{
        if(cartList.length < 1 && totalAmount < 1){
            setIsProduct(false)
        }else{
            setIsProduct(true)
        }
    },[cartList])

    return(
        <CartContext.Provider value={{setPrice, setTotalAmount, addCart, addCartHeader, deleteCart, cartList, price, isProduct, setIsProduct, totalAmount, deleteItem, addCartItem, btnDeleteItem, idOrder, setIdOrder, onForm, setOnForm, setCartList }}>
            {children}
        </CartContext.Provider>
    )
}