import { ReactNode } from 'react';
//components
import { Header } from '../../components';
//styles
import style from './page-with-menu-layout.module.scss';

interface IPageWithMenuLayoutProps {
  children: ReactNode;
}

const PageWithMenuLayout = ({ children }: IPageWithMenuLayoutProps): JSX.Element => {
  return (
    <div className={`${style['wrap']} container-mobile page`}>
      <Header />
      {children}
    </div>
  );
};

export default PageWithMenuLayout;
