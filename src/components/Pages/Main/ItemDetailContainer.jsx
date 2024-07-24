import { useParams } from 'react-router-dom';
import productsJson from '../../../mocks/products.json';

function ItemDetailContainer() {

  let { id } = useParams();
  id = parseInt(id)
  const product = productsJson.find(item => item.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <section className='detailProduct'>
        <figure className='detailProduct__img'>
          <img className='detailProduct__img--img' src={product.image} alt={product.title} />
        </figure>

        <div className="detailProduct__info">
          <ul className='detailProduct__ul'>
            <li className='detailProduct__li'>
              <h2 className='detailProduct__title'>{product.title}</h2>
            </li>
            <li className='detailProduct__li'>
              <p className='detailProduct__description'>{product.description}</p>
            </li>
            <li className='detailProduct__li'>
              <p className='detailProduct__stock'>Stock: {product.rating.count}</p>
            </li>
            <li className='detailProduct__price'>
              <strong>${product.price}</strong>
            </li>
          </ul>
        </div>

        <div className="detailProduct__btn">  
          <button className='detailProduct__btn--btn'>
            Agregar al carrito
          </button>
        </div>
    </section>
  );
}

export default ItemDetailContainer;