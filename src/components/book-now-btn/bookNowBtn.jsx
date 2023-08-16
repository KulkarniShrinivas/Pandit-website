import "./bookNowBtn.scss";
import { whatsappData } from "../../utils/whatsapp";

const BookNowBtn = () => {

  return (
    <button className="bookNowBtn" type="button" onClick={() => whatsappData()}>
      <strong className="strong">Book Now</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circleForBookNow"></div>
        <div className="circleForBookNow"></div>
      </div>
    </button>
  );
};

export default BookNowBtn;
