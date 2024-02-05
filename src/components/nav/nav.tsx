import { NavLink } from 'react-router-dom';
//styles
import style from './nav.module.scss';
//icons
import { NavIconHome, NavIconSettings, NavIconInfo, NavIconOverview } from '../../icons';

const Nav = (): JSX.Element => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <NavLink className={style.nav__link} to={'./'}>
            <span className="visually-hidden">home</span>
            <NavIconHome />
          </NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink className={style.nav__link} to={'./settings'}>
            <span className="visually-hidden">settings</span>
            <NavIconSettings />
          </NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink className={style.nav__link} to={'./overview'}>
            <span className="visually-hidden">overview</span>
            <NavIconOverview />
          </NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink className={style.nav__link} to={'./info'}>
            <span className="visually-hidden">info</span>
            <NavIconInfo />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
