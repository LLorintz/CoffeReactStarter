import bean from '/img/bean-img.png'
import './popularcard.css'

export type popularCoffeProps = {
    name:string,
    description:string,
    price:string,
    image:string
}

type coffetype= {
    coffe:popularCoffeProps
}

const PopularCard = ({coffe}:coffetype) => {

  return (
    <article className="popular__card">
                <div className="popular__images">
                   <div className="popular__shape"></div>
                   <img src={bean} alt="img" className="popular__bean-1"/>
                   <img src={bean} alt="img" className="popular__bean-2"/>
                   <img src={coffe.image} alt="img" className="popular__coffe"/>
                </div>
                <div className="popular__data">
                   <h2 className="popular__name">{coffe.name}</h2>
                   <p className="popular__description">{coffe.description}</p>
                   <a href="#contact" className="button button-dark">Order now: {coffe.price}</a>
                </div>
    </article>
  )
}

export default PopularCard