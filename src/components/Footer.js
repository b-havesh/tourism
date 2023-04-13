import arrowImage from './Images/arrow_forward.png'
import guideProfileImg from './Images/Guide-profile.png'
import LetterA from './Images/letter-A-white.png'
import LetterL from './Images/letter-l-white.png'
import LetterO from './Images/letter- o-white.png'
import LetterH from './Images/letter-h-white.png'
import LetterSmallA from './Images/letter-sm-a-white.png'

export const Footer = () => {
  return (
    <>
        <div className="footer-container flex">
        <div className="category-btn">
        <ul className="flex">
            <p className='categories'>Categories</p>
            <li>Adventure <img src={arrowImage} alt="next" /></li>
            <li>Culinary <img src={arrowImage} alt="next" /></li>
            <li>Eco-tourism <img src={arrowImage} alt="next" /></li>
            <li>Family <img src={arrowImage} alt="next" /></li>
            <li>Sport <img src={arrowImage} alt="next" /></li>
        </ul>
        </div>

        <div className="guide-main-container flex">
        <div className="guide-desc-container flex">
            <p className='travel-guide'>Travel Guide</p>
        <h4>Hadwin Malone</h4>
        <p className='guide-since'>Guide since 2012</p>
        <button id="contact-btn">Contact</button>
        </div>
        <div className="guide-profile">
            <img src={guideProfileImg} alt="profilez" />
        </div>
        </div>
    </div>
        <div className="footer-final">
            <img src={LetterA} alt="A" />
            <img src={LetterL} alt="L" />
            <img src={LetterO} alt="O" />
            <img src={LetterH} alt="H" />
            <img src={LetterSmallA} alt="A" />
        </div>
        </>
  )
}
