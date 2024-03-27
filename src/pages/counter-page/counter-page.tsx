import { ReactNode } from 'react';
//layouts
import { CounterPageLayout } from '../../layouts';
//style
import style from './counter-page.module.scss';

interface ICounterPageProps {
  backLink: string;
  headerTitle: string;
  children: ReactNode;
}

const CounterPage = ({ backLink, headerTitle, children }: ICounterPageProps): JSX.Element => {
  return (
    <CounterPageLayout backLink={backLink} headerTitle={headerTitle}>
      <main className={style['counter-page']}>{children}</main>
    </CounterPageLayout>
  );
};

export default CounterPage;
