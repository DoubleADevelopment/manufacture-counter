import { ReactNode } from 'react';
//components
import { Header } from '../../components';
//styles
import style from './page-with-menu-layout.module.scss';

interface IPageWithMenuLayoutProps {
  children: ReactNode;
  headerTitle: string;
  backLink?: string;
}

const PageWithMenuLayout = ({
  children,
  headerTitle,
  backLink,
}: IPageWithMenuLayoutProps): JSX.Element => {
  return (
    <div className={`${style['page']} container-mobile`}>
      <Header title={headerTitle} backLink={backLink} />
      {children}
    </div>
  );
};

export default PageWithMenuLayout;
