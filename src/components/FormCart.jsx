import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';


function FormCart() {
    const {cartList, price, deleteCart} = useCartContext()
    const [idOrder, setIdOrder] = useState("")
    const [formData, setFormData] = useState( {
        name: '',
        phone: '',
        email:'',
        repeatEmail: ''
    } )


    function getOrder(evt){

        evt.preventDefault()
        const order = {};
        order.buyer = formData
        order.isActive = true
        order.items = cartList.map(({id, name, amount, price}) => ({id,name, amount, price: amount*price}))
        order.total = price
        //Firestore
        const db = getFirestore()
        const ordersCollection = collection(db, 'Ordenes')
        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => {
            deleteCart()
            setFormData({
                name: '',
                phone: '',
                email:'',
                repeatEmail: ''
            })
        })

    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }


    return (
        <div className='container-fluid'>
            <div className='row container-form m-0'>
                <h2 className='col-12'>Finaliza la Compra</h2>
                <p className='col-12'>
                    Detalla tu informacion para poder enviarte un emain y concretar la compra. Recorda 
                    que cuentas con 6hs para concretar la compra luego de enviar el formulario.
                </p>
                <div className=' col-12 father-form'>
                    <h3>Finaliza tu Compra</h3>
                    <form onSubmit={getOrder} autoComplete='off' >
                        <div className='row-input'>
                            <p>Ingresar Nombre</p>
                            <input type="text" name="name" onChange={handleOnChange} value={formData.name}/>
                        </div>
                        <div className='row-input'>
                            <p>Numero de Celular</p>
                            <input type="text" name="phone" onChange={handleOnChange} value={formData.phone}/>
                        </div>
                        <div className='row-input'>
                            <p>Ingresa tu Email</p>
                            <input type="email" name="email" onChange={handleOnChange} value={formData.email} autoComplete='on'/>
                        </div>
                        <div className='row-input'>
                            <p>Repite tu Email</p>
                            <input type="email" name="repetirEmail" onChange={handleOnChange} value={formData.repeatEmail} autoComplete='on'/>
                        </div>

                        <button className="btn btn-danger m-5" type="submit">Generar la orden</button>
                    </form>   
                </div>
            </div>
        </div>
    )
}

export default FormCart