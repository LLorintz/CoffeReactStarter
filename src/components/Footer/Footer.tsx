import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
         <div>
            <h3 className="footer__title">Social</h3>

            <div className="footer__social">
               <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                  <i className="ri-facebook-circle-fill"></i>
               </a>
               <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                  <i className="ri-instagram-fill"></i>
               </a>
               <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                  <i className="ri-twitter-line"></i>
               </a>
            </div>
         </div>
         <div>
            <h3 className="footer__title">Payment Methods</h3>
            <div className="footer__pay">
               <img src="/img/footer-card-1.png" alt="image" className="footer__pay"/>
               <img src="/img/footer-card-2.png" alt="image" className="footer__pay"/>
               <img src="/img/footer-card-3.png" alt="image" className="footer__pay"/>
               <img src="/img/footer-card-4.png" alt="image" className="footer__pay"/>
            </div>
         </div>
         <div>
            <h3 className="footer__title">Subscribe For Discounts</h3>
            <form action="" className="footer__form">
               <input type="email" className="footer__input" placeholder="Email..."/>
               <button type="submit" className="footer__button button">Subscribe</button>
            </form>
         </div>
      </div>
      <span className="footer__copy">&#169; All Rights Reserved By Bedimcode</span>
   </footer>

  )
}

export default Footer