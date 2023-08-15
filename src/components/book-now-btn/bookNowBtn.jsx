import "./bookNowBtn.scss";

const BookNowBtn = () => {
  const redirectToWhatsApp = () => {
    // Replace with the actual WhatsApp link
    const whatsappLink = "https://api.whatsapp.com/send?phone=7899148582";
    window.location.href = whatsappLink;
  };

  return (
    <button class="btn" type="button" onClick={redirectToWhatsApp}>
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
