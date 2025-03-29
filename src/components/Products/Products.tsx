import "remixicon/fonts/remixicon.css";
import './products.css'
import ProductCards from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import ProductCard, { productsProps } from "../productCard/ProductCard";

const Products = () => {

  const [Products, setProducts] = useState<productsProps[]>() 

  const fetchProducts = async ()=>{
    const response = await fetch('/products.json')
    const data = await response.json();
    console.log(data)
    setProducts(data);
  } 

  useEffect(()=>{fetchProducts()},[])

  return (
    <section className="products section" id="products">
    <h2 className="section__title">THE MOST <br/> REQUESTED</h2>
    <div className="products__container container grid">
    {Products?.map(product=>(
        <ProductCard product={product}></ProductCard>
    ))}

    </div>

 </section>
  )
}

export default Products