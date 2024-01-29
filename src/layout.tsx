import { ReactNode } from 'react';
//all necessary styles
import './styles/container.scss';
import './styles/global-styles.scss';
import './styles/semantic.scss';
import './styles/variables/core.scss';
import './styles/variables/primitives.scss';
import './styles/variables/semantic.scss';
import './styles/variables/variables.scss';
import './styles/variables/width-variables.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <>{children}</>;
};

export default Layout;
