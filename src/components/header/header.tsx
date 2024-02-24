//components
import { Navigation } from '../';
//styles
import style from './header.module.scss';

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps): JSX.Element => {
  return (
    <header className={style.header}>
      <h1 className={`heading-medium content-primary-a`}>{title}</h1>

      <Navigation />
    </header>
  );
};

export default Header;
