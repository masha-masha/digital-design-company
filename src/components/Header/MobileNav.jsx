import { Link } from "react-router-dom";

const MobileNav = ({closeMenu}) => {
 return (
  <nav className="mobile-nav">
   <ul>
    <li>
     <Link to="/" onClick={closeMenu}>Главная</Link>
    </li>
    <li>
     <Link to="/price" onClick={closeMenu}>Цены</Link>
    </li>
    <li>
     <Link to="/blog" onClick={closeMenu}>Блог</Link>
    </li>
    <li>
     <Link to="/about" onClick={closeMenu}>О компании</Link>
    </li>
   </ul>
  </nav>
 );
};

export default MobileNav;
