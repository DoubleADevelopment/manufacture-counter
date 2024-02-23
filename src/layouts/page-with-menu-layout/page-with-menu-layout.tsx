import { ReactNode } from 'react';
//components
import { Header } from '../../components';
//styles
import style from './page-with-menu-layout.module.scss';

interface IPageWithMenuLayoutProps {
  children: ReactNode;
  headerTitle: string;
  additionalNav?: JSX.Element;
}

const PageWithMenuLayout = ({
  children,
  headerTitle,
  additionalNav,
}: IPageWithMenuLayoutProps): JSX.Element => {
  return (
    <div className={`${style['page']} container-mobile`}>
      <Header title={headerTitle} additionalNav={additionalNav} />
      {children}
    </div>
  );
};

export default PageWithMenuLayout;
