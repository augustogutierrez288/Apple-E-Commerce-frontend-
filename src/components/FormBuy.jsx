import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";

function FormBuy(){
    const {cartList, price, setCartList, setIdOrder, setOnForm, setIsProduct, setTotalAmount, setPrice} = useCartContext()
    const [formData, setFormData] = useState( {
        name: '',
        phone: '',
        email:'',
        repeatEmail: ''
    } )

    function NotiflyAdv(){
        return toast.warn('¡Ingresa un Email Validos!', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", })
    }
    function isValidForm(evt){
        evt.preventDefault()
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(re.test(formData.email) && formData.email !== " " && formData.email === formData.repeatEmail){
            getOrder()
        }else{
            NotiflyAdv()
        }
    }

    function getOrder(){
        const order = {};
        order.buyer = formData
        order.items = cartList.map(({id, name, amount, price}) => ({id,name, amount, price: amount*price}))
        order.total = price

        //Firestore
        const db = getFirestore()
        const ordersCollection = collection(db, 'Ordenes')
        addDoc(ordersCollection, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(() => {
            setCartList([])
            setIsProduct(false);
            setPrice(0)
            setTotalAmount(0)
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
            <form onSubmit={isValidForm} autoComplete='on'>
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
                    <input type="text" name="email" onChange={handleOnChange} value={formData.email}/>
                </div>
                <div className='row-input'>
                    <p>Repite tu Email</p>
                    <input type="text" name="repeatEmail" onChange={handleOnChange} value={formData.repeatEmail}/>
                </div>

                <button className="btn btn-danger m-5" type="submit">Generar la orden</button>
            </form>
        </div>
    )
}

export default FormBuy