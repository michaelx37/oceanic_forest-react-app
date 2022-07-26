import { NavLink } from 'react-router-dom';
import MenuList from './MenuList';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
          {MenuList.map((list) => (
            <li key={list.name} className={classes.navbar__link}>
              <NavLink to={list.path} className={classes.link}>
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
