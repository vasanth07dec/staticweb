import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <FaFacebookSquare className="icon"/>
        <FaInstagram className="icon"/>
      </div>
      <div className="contact-details">
        <div>Hours: Tue - Fri, 2.30pm - 8.30pm | Sat - Sun, 9am - 6pm</div>
        <a href="#">+65 8821 4153</a>
      </div>
    </div>
  );
};

export default Contact;
