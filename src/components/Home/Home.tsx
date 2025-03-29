import './home.css'
import { homeImages }  from '../../data/data' 


const Home = () => {

    
  return (
    <section className="home section" id="home">
        <div className="home__container">
            <h1 className="home__title">COLD COFFEE</h1>
            <div className="home__images">
            <div className="home__shape"></div>
              {homeImages.map(image=>(
                <img src={image.src} alt={image.alt} className={image.className} />
              ))}
            </div>
            <img src="/img/home-sticker.svg" alt="Home sticker" className="home__sticker" />
        <div className="home__data">
            <p className="home__description">
                Find delicious hot and cold coffees with the
                best varieties, calm the pleasure and enjoy
                a good coffee, order now.
            </p>
            <a href="#about" className="button">Learn More</a>
        </div>
        </div>
    </section>
  )
}

export default Home