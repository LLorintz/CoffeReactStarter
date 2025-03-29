import './productcard.css'

export type productsProps={
    name: string;
    price:number;
    image: string;
}

type productData={
    product:productsProps
}

const ProductCard = ({product}:productData) => {
  return (
    <article className="products__card">
          <div className="products__image">
             <div className="products__shape"></div>
             <img src="/img/ice-img.png" alt="" className="products__ice-1"/>
             <img src="/img/ice-img.png" alt="" className="products__ice-2"/>
             <img src={product.image} alt="" className="products__coffe"/>
          </div>
          <div className="products__data">
             <h3 className="products__name">{product.name}</h3>
             <span className="products__price">${product.price}</span>
             <button className="products__button">
                <i className="ri-shopping-bag-3-fill"></i>
             </button>
          </div>
       </article>
  )
}

export default ProductCard