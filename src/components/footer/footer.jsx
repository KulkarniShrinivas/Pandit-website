import { contactData } from "../../data/contact-us-data";
import { footerData } from "../../data/footer-data";
import SocialMedia from "../contact-us/social-media/socialMedia";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-details-container">
        <img
          className="logo-img"
          src={footerData.logo}
          alt="Marathi Sarvapooja Logo"
        />
        <p className="details">{footerData.footer_details}</p>
      </div>
      <div className="contact-details">
        <div className="talk-to-us">
          <h3>Talk to us</h3>
          <a href={`tel:${contactData.info.phoneNo}`}>
            {contactData.info.phoneNo}
          </a>
          <a href={`mailto:${contactData.info.email}`}>
            {contactData.info.email}
          </a>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p>{contactData.info.address}</p>
        </div>
        <SocialMedia
          whatsapp={footerData.whatsapp}
          fb={contactData.socialMedia.fb}
          insta={contactData.socialMedia.insta}
        />
      </div>
    </div>
  );
};

export default Footer;
