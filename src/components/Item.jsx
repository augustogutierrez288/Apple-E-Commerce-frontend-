import React from 'react'
import camion from '../assets/camion-de-reparto.png'

export function Item(props){
  return (
      <article className='card'>
        <h4>{props.produc.name}</h4>
        <div className='container-img'>
          <img src={props.produc.img} alt={props.produc.name} />
        </div>
        <div className='container-pab'>
          <p className='price'>${props.produc.price}</p>
          <p className='flex'><img src={camion} alt='camioncito'/>Flex + Envio Gratis</p>
          <p className='g'>Garantia de 12 Meses</p>
        </div>
      </article>
  )
}

export function Cargador(){
    return(
        <section className="container-animation">
            <div className="waterfall">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}