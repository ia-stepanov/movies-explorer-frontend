import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn, isLoading }) => {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname !== '/' ? '' : 'header_type_auth'}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип Movies Explorer"></img>
      </Link>
      {isLoading ? '' : loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
};

export default Header;
