import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = memo(({array}) => {
  return (
    <div className=' row container-card'>
      {array.map(product => <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 a-p-l' key={product.id}><Link className='card' to={`/product/${product.id}`}><Item product = {product} /></Link></div>)}
    </div>
  )
})

export default ItemList

