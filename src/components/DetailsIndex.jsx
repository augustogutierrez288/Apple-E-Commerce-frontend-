import React from 'react';
import garantia from '../assets/garantia.png';
import flexEnvio from '../assets/24-horas.png';
import atencion from '../assets/atencion-al-cliente.png';
import pickUp from '../assets/delivery-man.png';
import envio from '../assets/envio-gratis.png';
import efectivo from '../assets/efectivo.png';
import transferencia from '../assets/transferencia.png';
import tarjetas from '../assets/tarjetas.png';
import billetera from '../assets/billetera.png';

function DetailsIndex() {
  return (
    <>
        <div className='row m-0'>

            <div className='col-12 p-1 about-index'>

                <h2 className='col-12'>¿Por qué comprar en Galaxi Store?</h2>

                <div className=' col-12 container-about-index'>

                <div className='box'>
                    <img src={garantia} alt="garantia" />
                    <h3>GARANTÍA OFICIAL</h3>
                    <p>De 6 a 12 meses de garantía dependiendo del producto</p>
                </div>

                <div className='line-v'></div>

                <div className='box'>
                    <img src={flexEnvio} alt="envio-flex" />
                    <h3>ENVÍOS EN EL DÍA</h3>
                    <p>Envíos Flex en productos seleccionados (Tucuman y Alrededores)</p>
                </div>

                <div className='line-v'></div>

                <div className='box'>
                    <img src={atencion} alt="atencion-al-cliente" />
                    <h3>SERVICIO TÉCNICO</h3>
                    <p>Consultá con nuestros representantes.</p>
                </div>

                <div className='box'>
                    <img src={pickUp} alt="pick-up" />
                    <h3>PICK-UP</h3>
                    <p>Pedido listo para retirar en 2 hrs. Incluye cochera de cortesía para retirar de forma segura.</p>
                </div>

                <div className='line-v'></div>

                <div className='box'>
                    <img src={envio} alt="envio-gratis" />
                    <h3>ENVÍOS A TODO EL PAÍS</h3>
                    <p>Envio gratis a todo el pais. Despachamos en menos de 24hs.</p>
                </div>

            </div>
        </div>

        </div>
        <div className='row m-o'>

            <div className='col-12 p-1 container-pay'>

                <h2>Soluciones de Pago a medida.</h2>

                <p> 
                    La seguridad de nuestros clientes es el núcleo de todo lo que hacemos. 
                    Hemos tomado numerosos pasos para garantizar tu seguridad, además ofrecemos una variedad 
                    de formas convenientes de pago. 
                </p>

                <button className='btn btn-danger'>Consultános</button>

                <div className="container-box-2">

                    <div className="box2">
                        <img src={efectivo} alt="efectivo" />
                        <p>Efectivo en pesos $ y/o en dólares</p>
                    </div>

                    <div className="box2">
                        <img src={transferencia} alt="transferencia" />
                        <p>Transferencias bancarias</p>
                    </div>

                    <div className="box2">
                        <img src={tarjetas} alt="tarjetas" />
                        <p>Todas las tarjetas de crédito/débito</p>
                    </div>

                    <div className="box2">
                        <img src={billetera} alt="billetera" />
                        <p>Billeteras virtuales y Criptos</p>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default DetailsIndex