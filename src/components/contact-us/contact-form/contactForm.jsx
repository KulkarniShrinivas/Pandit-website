import "./contactForm.scss";

const ContactForm = () => {
  return (
    <div className="login-box">
      <p>Login</p>
      <form>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="password" />
          <label>Phone number</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>Query regarding?</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        Don't want to fill form?{" "}
        <a href="" className="a2"> Directly
        contact/whatsapp 7899148582!
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
