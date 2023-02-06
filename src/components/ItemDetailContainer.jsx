import React from 'react';
import { useParams } from 'react-router-dom';
import { arrayProductos } from '../scripts/api';
import añadirAlCarro from '../assets/agregar-carrito.png'

function ItemDetailContainer() {
  const {idProducto} = useParams()
  const elementoEncontrado = arrayProductos.find((elemento) => elemento.id === idProducto)

  return (
    <section className='row section-detail'>
      <div className='col-12 block-colour'></div>
      <article className='col-12 article-details'>
        <div className='img-details'><img src={elementoEncontrado.img} alt={elementoEncontrado.name} /></div>
        <div className='details'>
          <h4>{elementoEncontrado.name}</h4>
          <p className='description'>{elementoEncontrado.descrition}</p>
          <div className='memory'>
            <p>{elementoEncontrado.ram}</p>
            <p>{elementoEncontrado.rom}</p>
          </div>
          <p className='price-details'>$ {elementoEncontrado.price}</p>
          <div className='extras-details'>
            <div className='amout-details'>
              <p>Cantidad Disponible:<span>{elementoEncontrado.amount}</span></p>
            </div>
          <p>Garantia de 12 Meses</p>
          <p>Envio Gratis, Envio Flex o Retiro del Local</p>
          </div>
          <div className='container-buttons'>
            <button className='btn btn-danger'>Comprar</button>
            <button className='btn btn-danger'><img className='ac' src={añadirAlCarro} alt="carrito" /></button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ItemDetailContainer