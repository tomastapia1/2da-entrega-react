import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import productsJson from '../../../mocks/products.json'


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        console.log('Cargando datos: ',productsJson)
        setData(productsJson);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filterData = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;

    return(
        <section className="listProducts">
            <div className="filter">
                <button className='filter__btn' onClick={() => handleCategoryChange(null)}>Todos</button>
                <button className='filter__btn' onClick={() => handleCategoryChange('electronics')}>Electronicos</button>
                <button className='filter__btn' onClick={() => handleCategoryChange('clothing')}>Ropa</button>
            </div>

                { filterData ? filterData.map(i => (
                    <article className="card" key={i.id}>
                        <figure className="card__imgContainer">
                            <img className="card__img" 
                                src={i.image} 
                                alt={i.title}
                            />
                        </figure>
    
                        <div className="card__infoContainer">
                            <h2 className="card__name">{i.title}</h2>
                            <p className="card__stock">Disponibles: {i.rating.count}</p>
                        </div>  

                        <div className='card__price'>
                            <strong className='card__price--span'>${i.price}</strong>
                        </div>
    
                        <div className="card__btn">
                            <Link className="card__btn--btn" to={`/item/${i.id}/${i.category}/${i.title}`}>
                                Ver mas
                            </Link>
                        </div>
                    </article>
                )) : <p>Cargando datos...</p>

                }
        </section>
    )
};

export default ItemListContainer