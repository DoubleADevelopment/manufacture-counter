//components
import { Navigation } from '../';
//styles
import style from './header.module.scss';

interface IHeaderProps {
  title: string;
  additionalNav?: JSX.Element;
}

const Header = ({ title, additionalNav }: IHeaderProps): JSX.Element => {
  return (
    <header className={style.header}>
      <h1 className={`heading-medium content-primary-a`}>{title}</h1>

      <Navigation additionalNav={additionalNav} />
    </header>
  );
};

export default Header;
