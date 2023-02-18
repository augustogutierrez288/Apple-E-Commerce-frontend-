import React from 'react'
import { Link } from 'react-router-dom'
import {Item} from './item'

function ItemList({array}) {
  return (
    <section className=' row container-card'>
      {array.map(producto => <article className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 a-p-l' key={producto.id}><Link className='card' to={`/producto/${producto.id}`}><Item product = {producto} /></Link></article>)}
    </section>
  )
}

export default ItemList

