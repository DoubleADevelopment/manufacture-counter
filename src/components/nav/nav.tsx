//components
import NavigationLink from './navigation-link/navigation-link';
//styles
import style from './nav.module.scss';
//icons
import { NavIconHome, NavIconSettings, NavIconInfo, NavIconOverview } from '../../icons';

const Navigation = (): JSX.Element => {
  return (
    <nav className={`${style.nav} unselectable`}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <NavigationLink to={'./'} name="home">
            <NavIconHome />
          </NavigationLink>
        </li>
        <li className={style.nav__item}>
          <NavigationLink to={'./settings'} name="settings">
            <NavIconSettings />
          </NavigationLink>
        </li>
        <li className={style.nav__item}>
          <NavigationLink to={'./overview'} name="overview">
            <NavIconOverview />
          </NavigationLink>
        </li>
        <li className={style.nav__item}>
          <NavigationLink to={'./info'} name="info">
            <NavIconInfo />
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
