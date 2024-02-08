//components
import { Navigation } from '../';
//styles
import style from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={style.header}>
      <h1 className="visually-hidden">counter app</h1>

      <Navigation />
    </header>
  );
};

export default Header;
