import { useCartContext } from '../context/CartContext';
import { ToastContainer } from 'react-toastify';
import FormBuy from './FormBuy';
import IDBuy from './IDBuy';


function FormCart() {
    const {onForm } = useCartContext()

    return (
        <div className='container-fluid'>
            <div className='row container-form m-0'>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>
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