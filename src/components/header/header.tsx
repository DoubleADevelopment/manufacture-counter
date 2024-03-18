import { Link } from 'react-router-dom';
//components
import { Navigation } from '../';
//variables
import { InterfaceText } from '../../variables';
//icons
import { ArrowBackIcon } from '../../icons';
//styles
import style from './header.module.scss';

interface IHeaderProps {
  title: string;
  backLink?: string;
}

const Header = ({ title, backLink }: IHeaderProps): JSX.Element => {
  return (
    <header className={style.header}>
      <h1 className={`heading-medium content-primary-a`}>{title}</h1>

      {backLink && (
        <Link className={`${style['header__back-link']} unselectable`} to={backLink}>
          <ArrowBackIcon />
          <span className="visually-hidden">{InterfaceText.BACK_TO_OVERVIEW}</span>
        </Link>
      )}

      <Navigation />
    </header>
  );
};

export default Header;
