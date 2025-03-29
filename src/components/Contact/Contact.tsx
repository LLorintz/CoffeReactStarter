import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
    <h2 className="section__title">CONTACT US</h2>
    <div className="contact__container container grid">
       <div className="contact__info grid">
          <div>
             <h3 className="contact__title">Write Us</h3>
             <div className="contact__social">
                <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                   target="_blank" className="contact__social-link">
                   <i className="ri-whatsapp-fill"></i>
                </a>
                <a href="https://m.me/bedimcode" target="_blank" className="contact__social-link">
                   <i className="ri-messenger-fill"></i>
                </a>
                <a href="https://t.me/telegram" target="_blank" className="contact__social-link">
                   <i className="ri-telegram-2-fill"></i>
                </a>
             </div>
          </div>
          <div>
             <h3 className="contact__title">Location</h3>
             <address className="contact__address">
                Lima - Sun City - Peru <br/>
                Av. Moon #4321
             </address>
             <a href="https://maps.app.goo.gl/MAmMDxUBFXBSUzLH7" className="contact__map">
                <i className="ri-map-pin-fill"></i>
                <span>View On Map</span>
             </a>
          </div>
       </div>
       <div className="contact__info grid">
          <div>
             <h3 className="contact__title">Delivery</h3>
             <address className="contact__address">
                +00-987-7654-321 <br/>
                +11-012345
             </address>
          </div>
          <div>
             <h3 className="contact__title">Attention</h3>
             <address className="contact__address">
                Monday - Saturday <br/> 9AM - 10PM
             </address>
          </div>
       </div>
       <div className="contact__images">
          <div className="contact__shape">
             <img src="/img/contact-delivery.png" alt="image" className="contact__delivery"/>
          </div>
       </div>
    </div>
 </section>


  )
}

export default Contact