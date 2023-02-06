import React from 'react'
import { Link } from 'react-router-dom'
import {Item} from './item'

function ItemList(props) {
  return (
    <>
      {props.array.map(producto => <section className='container-card' key={producto.id}><Link to={`/producto/${producto.id}`}><Item produc = {producto} /></Link></section>)}
    </>
  )
}

export default ItemList

