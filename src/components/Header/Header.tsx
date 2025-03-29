import { useEffect, useState } from 'react';
import './/header.css'
import "remixicon/fonts/remixicon.css";

const Header = () => {

   const [toggle, setToggle] = useState(false)
   const [hasShadow, setHasShadow] = useState(false);

   const handleSetToggle = (B:boolean)=>{
      setToggle(B)
   }

   useEffect(()=>{
      const handleScroll = () => {
         setHasShadow(window.scrollY >= 50);
       }; 
   },[])

  return (
    <header className={`header ${hasShadow ? "shadow-header" : ""}`} id="header">
      <nav className="nav container">
         <a href="#" className="nav__logo">STARCOFFEE</a>
         <div className={`nav__menu ${toggle?'show-menu':''}`} id="nav-menu">
         <ul className="nav__list">
            {["HOME", "POPULAR", "ABOUT US", "PRODUCTS", "CONTACT"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(" ", "")}`} className="nav__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
           
            <div onClick={()=>handleSetToggle(false)} className="nav__close" id="nav-close">
               <i className="ri-close-large-line"></i>
            </div>
         </div>

       
         <div onClick={()=>handleSetToggle(true)} className="nav__toggle" id="nav-toggle">
            <i className="ri-apps-2-fill"></i>
         </div>
      </nav>
   </header>
  )
}

export default Header