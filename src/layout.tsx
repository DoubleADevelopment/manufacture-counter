import { ReactNode } from 'react';
//all necessary styles
import './styles/container.scss';
import './styles/global-styles.scss';
import './styles/semantic.scss';
import './styles/fonts.scss';
import './styles/variables/core.scss';
import './styles/variables/primitives.scss';
import './styles/variables/semantic.scss';
import './styles/variables/variables.scss';
import './styles/variables/width-variables.scss';
//fonts
import './fonts/UberMoveTextLight.woff';
import './fonts/UberMoveTextLight.woff2';
import './fonts/UberMoveTextMedium.woff';
import './fonts/UberMoveTextMedium.woff2';
import './fonts/UberMoveTextRegular.woff';
import './fonts/UberMoveTextRegular.woff2';
import './fonts/UberMoveTextBold.woff';
import './fonts/UberMoveTextBold.woff2';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <>{children}</>;
};

export default Layout;
