//styles
import { Link } from 'react-router-dom';
import style from './counter-header.module.scss';
import { ArrowBackIcon } from '../../../../icons';
import { CounterRouting } from '../../variables/counter-routing';

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
