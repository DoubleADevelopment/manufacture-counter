import { ReactNode } from 'react';
//components
import { Header } from '../../components';
//styles
import style from './page-with-menu-layout.module.scss';

interface IPageWithMenuLayoutProps {
  children: ReactNode;
  headerTitle: string;
  backLink?: string;
  additionalNav?: JSX.Element;
}

const PageWithMenuLayout = ({
  children,
  headerTitle,
  backLink,
  additionalNav,
}: IPageWithMenuLayoutProps): JSX.Element => {
  const paddingClass = additionalNav ? style['page--with-additional-menu'] : '';
  return (
    <div className={`${style['page']} container-mobile ${paddingClass}`}>
      <Header title={headerTitle} backLink={backLink} additionalNav={additionalNav} />
      {children}
    </div>
  );
};

export default PageWithMenuLayout;
