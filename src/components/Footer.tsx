import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <p>
            V prípade otázok neváhajte kontaktovať.
          </p>
        </div>

        <div className="footer-section links">
          <ul>
            <li><Link to="/">Domov</Link></li>
            <li><Link to="/reservation">Rezervácia</Link></li>
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
