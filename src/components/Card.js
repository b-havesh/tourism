import cardImage1 from "./Images/CardImage.jpg";
import cardImage2 from "./Images/CardImage2.jpg";
import cardImage3 from "./Images/CardImage3.jpg";
import arrowImage from "./Images/arrow_forward.png"

export const Card = () => {
  return (
     <>
    <div className="card-container flex">
      <div className="highlights">Highlights</div>
      <img className="card-img" src={cardImage1} alt="img" />
      <h3 className="card-head">Surfing</h3>
      <p className="card-desc">
      Best Hawaiian islands for <br /> surfing.
      </p>
      <button id="btn-arrow"><img src={arrowImage} alt="next" /></button>
    </div>
    <div className="card-container flex">
      <img className="card-img" src={cardImage2} alt="img" />
      <h3 className="card-head">Hula</h3>
      <p className="card-desc">
        Try it yourself.
      </p>
      <button id="btn-arrow"><img src={arrowImage} alt="next" /></button>
    </div>
    <div className="card-container flex">
      <img className="card-img" src={cardImage3} alt="img" />
      <h3 className="card-head">Vulcanoes</h3>
      <p className="card-desc">
      Volcanic conditions can change at <br /> any time.
      </p>
      <button id="btn-arrow"><img src={arrowImage} alt="next" /></button>
    </div>
    </>
  );
};
