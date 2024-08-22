import logo from '../photos/logo.png'
import { Link } from 'react-router-dom'
import OptionMenu from './OptionMenu';
import { toggleMenu } from './OptionMenu';

const NavBar = () => {
  
  window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (navbar !== null){
      if (window.scrollY > 0) {
          navbar.classList.add('sticky');
      } else {
          navbar.classList.remove('sticky');
      }
    }
  })
  
  return (
    <>
    <nav className="navbar navbar--style">
        <Link to='/' className="navbar__title">
            <img src={logo} alt="logo" className="navar__title_logo"/>
            <h1 className="navbar__title__headline navbar__title__headline--style">
                MP-ORTHOPEDICS,s.r.o.
            </h1>
        </Link>
        <ul className="navbar__menu navbar__menu--fontsize">
            <Link className="navbar__menu__option navbar__menu__option--style" to='/'>Domov</Link>
            <Link className="navbar__menu__option navbar__menu__option--style" to='/reservation'>Rezervácia</Link>
            <Link className="navbar__menu__option navbar__menu__option--style" to='/contact'>Kontakt</Link>
        </ul>
        <OptionMenu/>
    </nav>
    <div className='menuContainer'>
            <Link className="navbar__menu__option__phone" to='/' onClick={toggleMenu}>Domov</Link>
            <Link className="navbar__menu__option__phone" to='/reservation' onClick={toggleMenu}>Rezervácia</Link>
            <Link className="navbar__menu__option__phone" to='/contact' onClick={toggleMenu}>Kontakt</Link>
    </div>
    </>
  )
}

export default NavBar