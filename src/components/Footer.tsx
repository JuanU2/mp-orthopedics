import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Kontakt</h1>
          <p>
            V prípade otázok neváhajte kontaktovať.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +123-456-789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@mywebsite.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <ul>
            <li><Link to="/">Domov</Link></li>
            <li><Link to="/reservation">Rezervácia</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} | MP ORTHOPEDICS
      </div>
    </footer>
  );
}

export default Footer;
