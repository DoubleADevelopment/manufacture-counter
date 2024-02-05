//components
import Nav from '../nav/nav';
//styles
import style from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={style.header}>
      <h1 className="visually-hidden">header</h1>

      <Nav />
    </header>
  );
};

export default Header;
