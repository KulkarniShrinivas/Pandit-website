
import React from 'react';
import { whatsappData } from "../../utils/whatsapp";
import './bookNowBtn.scss'; // Make sure to adjust the path to your SCSS file

const BookNowBtn = () => {
  return (
    <button className="button" onClick={() => whatsappData()}>
      <div className="display">
        <div id="msg">Click Me</div>
      </div>
      <span></span>
      <span></span>
    </button>
  );
};

export default BookNowBtn;












// import "./bookNowBtn.scss";
// import { whatsappData } from "../../utils/whatsapp";

// const BookNowBtn = () => {

//   return (
//     <button className="bookNowBtn" type="button" onClick={() => whatsappData()}>
//       <strong className="strong">Book Now</strong>
//       <div id="container-stars">
//         <div id="stars"></div>
//       </div>

//       <div id="glow">
//         <div className="circleForBookNow"></div>
//         <div className="circleForBookNow"></div>
//       </div>
//     </button>
//   );
// };

// export default BookNowBtn;
