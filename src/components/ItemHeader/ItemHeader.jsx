import React from 'react'
import arrow from '../../assets/arrow.png';
import add from '../../assets/add.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


function ItemHeader({product}) {
  const {addCartHeader} = useCartContext()

  function onAddHeader(element) {
    addCartHeader({...element, amount: 1})
}

  return (
    <>
        <div className="cols-1">
            <h2>{product.title}</h2>
            <h3>{product.subtitle}</h3>
            <p>{product.text}</p>
            <h4>${product.price}</h4>
            <Link to={`/flagship-product/${product.id}`}><button type="button" className='arrow'> Ver Mas <img src={arrow} alt="arrow" /></button></Link>
        </div>
        <div className="cols-2">
            <img className="controller" src={product.img} alt={product.name} />
            <div className="color-box"></div>
            <div className="add-btn" onClick={()=>{onAddHeader(product)}}>
                <img src={add} alt="button-add" />
                <p><small>Añadir al Carro</small></p>
            </div>
        </div>
    </>
  )
}

export default ItemHeader