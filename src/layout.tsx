import { ReactNode } from 'react';
//all necessary styles
import './styles/index.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <>{children}</>;
};

export default Layout;
