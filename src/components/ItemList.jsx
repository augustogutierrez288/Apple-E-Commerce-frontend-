import React from 'react'
import { Link } from 'react-router-dom'
import {Item} from './item'

function ItemList({array}) {
  return (
    <>
      {array.map(producto => <section className='container-card' key={producto.id}><Link className='a-p-l' to={`/producto/${producto.id}`}><Item product = {producto} /></Link></section>)}
    </>
  )
}

export default ItemList

