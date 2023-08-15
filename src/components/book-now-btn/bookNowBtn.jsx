import "./bookNowBtn.scss";

const BookNowBtn = () => {
  return (
    <button class="btn" type="button">
      <strong>Book Now</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </button>
  );
};

export default BookNowBtn;
