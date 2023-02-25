import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = memo(({array}) => {
  return (
    <div className=' row container-card'>
      <div className='col-12 container-title'>
        <h2>Lista de Productos</h2>
        <div className='container-btn-filtro'>
          <Link className='btn-filtro' to="/category/iPhone">Todos</Link>
          <Link className='btn-filtro' to="/category/iPhone">iPhone</Link>
          <Link className='btn-filtro' to="/category/iPad">iPad</Link>
          <Link className='btn-filtro' to="/category/Macbook">Macbook</Link>
        </div>
      </div>
      {array.map(product => <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 a-p-l' key={product.id}><Link className='card' to={`/product/${product.id}`}><Item product = {product} /></Link></div>)}
    </div>
  )
})

export default ItemList

