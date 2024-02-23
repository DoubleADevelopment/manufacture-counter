import { ReactNode } from 'react';
//styles
import style from './counter-page-layout.module.scss';

interface ICounterPageLayoutProps {
  children: ReactNode;
}

const CounterPageLayout = ({ children }: ICounterPageLayoutProps): JSX.Element => {
  return <div className={`${style['page']} container-mobile`}>{children}</div>;
};

export default CounterPageLayout;
