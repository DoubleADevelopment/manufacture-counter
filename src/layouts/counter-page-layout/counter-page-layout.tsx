import { ReactNode } from 'react';
//components
import { CounterHeader } from '../../components';
//styles
import style from './counter-page-layout.module.scss';

interface ICounterPageLayoutProps {
  children: ReactNode;
  backLink: string;
  headerTitle: string;
}

const CounterPageLayout = ({
  children,
  backLink,
  headerTitle,
}: ICounterPageLayoutProps): JSX.Element => {
  return (
    <div className={`${style['page']} container-mobile`}>
      <CounterHeader backLinkPath={backLink} headerTitle={headerTitle} />
      {children}
    </div>
  );
};

export default CounterPageLayout;
