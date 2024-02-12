import { ReactNode } from 'react';
//styles
import style from './page-with-header-layout.module.scss';

interface IPageWithHeaderLayoutProps {
  children: ReactNode;
}

const PageWithHeaderLayout = ({ children }: IPageWithHeaderLayoutProps): JSX.Element => {
  return <div className={`${style['wrap']} container-mobile page-with-header`}>{children}</div>;
};

export default PageWithHeaderLayout;
