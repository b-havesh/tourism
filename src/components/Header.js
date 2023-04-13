import LetterA from './Images/LetterA.png'
import LetterL from './Images/LetterL.png'
import LetterO from './Images/LetterO.png'
import LetterH from './Images/LetterH.png'
import LetterSmallA from './Images/LetterSmallA.png'
import { useState, useCallback } from 'react';
import menuIco from './Images/menu-ico.png'
import { Sidebar } from './Sidebar'

export const Header = () => {

    const [menuState, setMenuState] = useState(false);

    const handleMenuClick = useCallback(() => {
        setMenuState((menuState) => !menuState);
      }, [setMenuState]);

    let toggleClassCheckMenu = menuState && " active-menu";

  return (
    <>
        <div className="header-container flex">

        <div className="logo-container flex">
          <div className="logo"><img src={LetterA} alt="A" /></div>      
          <div className="logo"><img src={LetterL} alt="l" /></div>      
          <div className="logo"><img src={LetterO} alt="O" /></div>      
          <div className="logo"><img src={LetterH} alt="h" /></div>      
          <div className="logo"><img src={LetterSmallA} alt="a" /></div>      
        </div>


        <div className="menu flex">
            <ul className='menu-items flex'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Surfing</a></li>
                    <li><a href="#">Hula</a></li>
                    <li><a href="#">Volcano</a></li>
        <button id="book-btn">Book a trip</button>
        <button className="menu-ico" onClick={handleMenuClick}><img src={menuIco} alt="menu" /></button>
            </ul>
        </div>

    </div>
        <Sidebar handleClick={handleMenuClick} classMenu={toggleClassCheckMenu}/>       
        </>
  )
}
