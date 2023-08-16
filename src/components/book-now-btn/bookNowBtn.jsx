import React from 'react';
import { whatsappData } from "../../utils/whatsapp";
import "./bookNowBtn.scss";

const BookNowBtn = () => {

  return (
    <button className="bookNowBtn" type="button" onClick={() => whatsappData()}>
      BOOK NOW
    </button>
  );
};

export default BookNowBtn;
