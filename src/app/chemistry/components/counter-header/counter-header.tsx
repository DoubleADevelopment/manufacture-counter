import { Link } from 'react-router-dom';
//variables
import { CounterRouting } from '../../variables/counter-routing';
//icons
import { ArrowBackIcon } from '../../../../icons';
//styles
import style from './counter-header.module.scss';

const CounterHeader = (): JSX.Element => {
  return (
    <header className={style.header}>
      <Link className={style['header__back-link']} to={CounterRouting.ROOT}>
        <ArrowBackIcon />
        <span className="visually-hidden">Powrót do przeglądu</span>
      </Link>
      <h1 className={`${style.header__title} heading-medium  content-primary-a`}>Licznik chemii</h1>
    </header>
  );
};

export default CounterHeader;
