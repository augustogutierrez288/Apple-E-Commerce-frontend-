import React from 'react';
import { Link } from 'react-router-dom';
import visa from '../assets/pagos/visa.png';
import master from '../assets/pagos/mastercard.png';
import naranja from '../assets/pagos/naranja.png';
import amex from '../assets/pagos/amex.png';
import ahora12 from '../assets/pagos/ahora12.png';
import argencard from '../assets/pagos/argencard.png';
import banelco from '../assets/pagos/banelco.png';
import cabal from '../assets/pagos/cabal.png';
import cencosud from '../assets/pagos/cencosud.png';
import cordobesa from '../assets/pagos/cordobesa.png';
import diners from '../assets/pagos/diners.png';
import mp from '../assets/pagos/mercadopago.png';
import pf from '../assets/pagos/pagofacil.png';
import pz from '../assets/pagos/planZ.png';
import rp from '../assets/pagos/rapipago.png';
import shop from '../assets/pagos/shop.png';
import sucredito from '../assets/pagos/sucredito.jpg'

function Footer() {

  return (
    <footer className='container-fluid m-0 p-0 bg-dark text-white'>
        <div className='row m-0'>
            <section className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 footer-business'>
                <p>Empresa</p>
                <ul className='m-0 p-0'>
                    <li>Sobre Nosotros</li>
                    <li>Trabaja con Nosotros</li>
                    <li>Servicio Tecnico</li>
                    <li>Sucursales</li>
                </ul>
            </section>
            <section className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 footer-product'>
                <p>Productos</p>
                <ul className='m-0 p-0'>
                    <li><Link to="/categoria/iPhone">iPhone</Link></li>
                    <li><Link to="/categoria/iPad">iPad</Link></li>
                    <li><Link to="/categoria/Macbook">Macbook</Link></li>
                    <li><Link to="/categoria/MacStudio">Mac Studio</Link></li>
                    <li><Link to="/categoria/MacDisplay">Mac Display</Link></li>
                    <li><Link to="/categoria/Accesorios">Accesorios</Link></li>
                </ul>
            </section>
            <section className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 footer-card'>
                <p>Metodo de Pago</p>
                <div>
                    <img src={visa} alt="visa" />
                    <img src={master} alt="mastercard" />
                    <img src={amex} alt="amex" />
                    <img src={naranja} alt="naranja" />
                    <img src={diners} alt="diners" />
                    <img src={cabal} alt="cabal" />
                    <img src={cencosud} alt="cencosud" />
                    <img src={cordobesa} alt="cordobesa" />
                    <img src={argencard} alt="argencard" />
                    <img src={sucredito} alt="sucredito" />
                    <img src={shop} alt="shop" />
                    <img src={banelco} alt="banelco" />
                    <img src={mp} alt="mp" />
                    <img src={rp} alt="rp" />
                    <img src={pf} alt="pf" />
                    <img src={pz} alt="pz" />
                    <img src={ahora12} alt="ahora12" />
                </div>
            </section>
            <section className='col-12 autor'>
                <p>© 2023 Galaxi Store. Todos los derechos reservados. Desarrollado por Augusto Gutierrez</p>
            </section>
        </div>
    </footer>
  )
}

export default Footer