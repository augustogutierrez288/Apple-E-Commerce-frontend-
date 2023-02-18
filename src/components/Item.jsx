import camion from '../assets/camion-de-reparto.png';

export function Item({product}){
  return (
      <>
        <h4>{product.name}</h4>
        <div className='container-img'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='container-pab'>
          <p className='price'>${product.price}</p>
          <p className='flex'><img src={camion} alt='camioncito'/>Flex + Envio Gratis</p>
          <p className='g'>Garantia de 12 Meses</p>
        </div>
      </>
  )
}

export function ItemCharger(){
    return(
        <section className="row container-animation">
            <div className=" col-12 waterfall">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}