import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({element}) {
 

  const {addCart} = useCartContext()

  function onAdd(cant) {
    addCart({...element, amount: cant})
  }

  return (
    <main className='row section-detail'>
      <section className='col-12 block-colour'></section>
      <article className='col-12 article-details'>
        <div className='img-details'><img src={element.img} alt={element.name} /></div>
        <div className='details'>
          <h4>{element.name}</h4>
          <p className='description'>{element.descrition}</p>
          <div className='memory'>
            <p>{element.ram}</p>
            <p>{element.rom}</p>
          </div>
          <p className='price-details'>$ {element.price}</p>
          <div className='extras-details'>
            <p>Garantia de 12 Meses</p>
            <p className='shipping-detail'>Envio Gratis, Envio Flex o Retiro del Local</p>
            <div className='amout-details'>
              <p>Cantidad Disponible: <span>{element.stock}</span></p>
            </div>
            <ItemCount stock={element.stock} onAdd={onAdd}/>
          </div>
        </div>
      </article>
    </main>
  )
}

export default ItemDetail