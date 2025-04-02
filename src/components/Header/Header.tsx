import React from 'react'

const Header = () => {

  
  

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */}

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */}

     {/*
     Használd hozzá ezt a kódot
     useEffect(()=>{
     const handleScroll = () => {
        setHasShadow(window.scrollY >= 50);
       }; 
       window.addEventListener("scroll", handleScroll);
       },[])
    */}

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/}
        
    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/}

    {/*Mobil nézetben jobb felső sarokban legyen egy toggle aminek hatására legördül a menu.*/}

    {/*Mobil nézetben a legördült menüben legyen egy X amivel visszagördül a menü*/}

    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/}

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */}

    {/*close ikon osztálya: ri-close-large-line */}

    {/*toggle ikon osztálya: ri-apps-2-fill */}

    return
}

export default Header
