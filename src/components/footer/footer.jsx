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
          <a href={`tel:${footerData.number}`}>{footerData.number}</a>
          <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p>{footerData.address}</p>
        </div>
        <SocialMedia
          whatsapp={footerData.whatsapp}
          fb={footerData.fb_link}
          insta={footerData.insta_link}
        />
      </div>
    </div>
  );
};

export default Footer;
