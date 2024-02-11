import { ReactNode } from 'react';
//styles
import style from './page-without-menu-layout.module.scss';

interface IPageWithMenuLayoutProps {
  children: ReactNode;
}

const PageWithoutMenuLayout = ({ children }: IPageWithMenuLayoutProps): JSX.Element => {
  return <div className={`${style['wrap']} container-mobile page-without-menu`}>{children}</div>;
};

export default PageWithoutMenuLayout;
