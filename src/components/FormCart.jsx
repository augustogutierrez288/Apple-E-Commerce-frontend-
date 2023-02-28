import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';


function FormCart() {
    const [idOrder, setIdOrder] = useState("")
    const [onForm, setOnForm] = useState(true)
    
    function FormBuy(){
        const {cartList, price, deleteCart} = useCartContext()
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
            .then(resp => setIdOrder(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                deleteCart()
                setOnForm(false)
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

        return(
            <div className=' col-12 father-form'>
                <h2>Finaliza tu Compra</h2>
                <form onSubmit={getOrder} autoComplete='off'>
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
                        <input type="text" name="email" onChange={handleOnChange} value={formData.email} autoComplete='on'/>
                    </div>
                    <div className='row-input'>
                        <p>Repite tu Email</p>
                        <input type="text" name="repeatEmail:" onChange={handleOnChange} value={formData.repeatEmail} autoComplete='on'/>
                    </div>

                    <button className="btn btn-danger m-5" type="submit">Generar la orden</button>
                </form>
            </div>
        )
    }

    function IDBuy(){
        return(
            <div className='col-12 p-2 border border-light rounded d-flex flex-column justify-content-evenly align-items-center id-order'>
                <p>El Formulario se relleno con Exito, ahora chequea tu correo electronico para finalizar la compra.</p>
                <p> El ID de tu Compra es: "{idOrder}" </p>
                <p>Muchas gracias por elegirnos. Vuelve pronto.</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            </div>
        )
    }

    return (
        <div className='container-fluid'>
            <div className='row container-form m-0'>
                <h2 className='col-12'>Finaliza la Compra</h2>
                <p className='col-12'>
                    Detalla tu informacion para poder enviarte un emain y concretar la compra. Recorda 
                    que cuentas con 6hs para concretar la compra luego de enviar el formulario.
                </p>
                {onForm ? <FormBuy/> : <IDBuy/> }
            </div>
        </div>
    )
}

export default FormCart