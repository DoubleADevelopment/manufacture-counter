import { NavLink } from 'react-router-dom';
//styles
import style from './nav.module.scss';

const Nav = (): JSX.Element => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to={'./'}>home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
