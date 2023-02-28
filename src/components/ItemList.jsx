import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = memo(({array}) => {

  const [arrayProduct , setArrayProduct] = useState(array);
  const arrayCategory = ['Todos','iPhone','iPad','Macbook']; 

  function filter(category){
    if( category === 'Todos'){
      setArrayProduct(array)
      return
    }else{
     const arrayFilter = array.filter((product) => product.category === category);
     setArrayProduct(arrayFilter)
    }
  }

  return (
    <div className=' row container-card'>

      <div className='col-12 container-title'>

        <h2>Lista de Productos</h2>

        <div className='container-btn-filtro'>

          {arrayCategory.map((category)=>{
             return <button className='btn-filtro' type='button' key={category} onClick={()=>{filter(category)}} > {category} </button>
          })}

        </div>

      </div>

      {arrayProduct.map(product => <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 a-p-l' key={product.id}><Link className='card' to={`/product/${product.id}`}><Item product = {product} /></Link></div>)}
    </div>
  )
})

export default ItemList

