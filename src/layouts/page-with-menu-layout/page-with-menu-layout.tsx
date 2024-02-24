import { ReactNode } from 'react';
//components
import { Header } from '../../components';
//styles
import style from './page-with-menu-layout.module.scss';

interface IPageWithMenuLayoutProps {
  children: ReactNode;
  headerTitle: string;
}

const PageWithMenuLayout = ({ children, headerTitle }: IPageWithMenuLayoutProps): JSX.Element => {
  return (
    <div className={`${style['page']} container-mobile`}>
      <Header title={headerTitle} />
      {children}
    </div>
  );
};

export default PageWithMenuLayout;
