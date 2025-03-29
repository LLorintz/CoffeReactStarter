import './popular.css'
import PopularCard from '../popularCard/PopularCard'
import { popularCoffeProps } from '../popularCard/PopularCard'
import { useEffect, useState } from 'react'

const Popular = () => {

const [PopularCoffe, setPopularCoffe] = useState<popularCoffeProps[]>([])

const fetchPopular = async()=>{
try {
      const response = await fetch('/popular.json')
      if (!response.ok) {
        throw new Error;
      }
      const data = await response.json()
      setPopularCoffe(data)
} catch (error) {
  console.log(error)
}
}

useEffect(()=>{fetchPopular()},[])

  return (
    <section className="popular" id="popular">
    <div className="popular__container container">
       <h2 className="section__title">POPULAR <br/> CREATIONS</h2>
       <div className="popular__coffes">
            {PopularCoffe.map((coffe,index)=>(
                <PopularCard key={index} coffe={coffe}></PopularCard>
            ))}         
       </div>
    </div>
 </section>
  )
}

export default Popular