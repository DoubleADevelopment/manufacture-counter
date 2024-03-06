import { Link } from 'react-router-dom';
//variables
import { InterfaceText } from '../../variables';
//icons
import { ArrowBackIcon } from '../../icons';
//styles
import style from './counter-header.module.scss';

interface ICounterHeaderProps {
  backLinkPath: string;
  headerTitle: string;
}

const CounterHeader = ({ backLinkPath, headerTitle }: ICounterHeaderProps): JSX.Element => {
  return (
    <header className={style.header}>
      <h1 className={`${style.header__title} heading-medium content-primary-a`}>{headerTitle}</h1>
      <Link className={style['header__back-link']} to={backLinkPath}>
        <ArrowBackIcon />
        <span className="visually-hidden">{InterfaceText.BACK_TO_OVERVIEW}</span>
      </Link>
    </header>
  );
};

export default CounterHeader;
