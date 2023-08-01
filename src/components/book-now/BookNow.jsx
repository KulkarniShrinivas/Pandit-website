import React from "react";
import Tilt from "react-parallax-tilt";
import "./home.scss";
import { Button } from "@mui/material";

const BookNow = () => {
  return (
    <div className="home-component">
      <Tilt>
        <div className="card">
          <h1>Title</h1>
          <p>
            Best in Class Pooja Services as per Vedic Standards with Quality.
            Perform your pooja with the Best group of Professional Purohit &
            Pandit
          </p>
          <Button variant="contained" className="btn">
            book now
          </Button>
        </div>
      </Tilt>
    </div>
  );
};

export default BookNow;
