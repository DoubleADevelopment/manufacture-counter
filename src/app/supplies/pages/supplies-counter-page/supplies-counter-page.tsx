//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
//variables
//style
import style from './supplies-counter-page.module.scss';

const SuppliesCounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout backLink={ChemistryAppRouting.ROOT.path} headerTitle={'licznik komponentów'}>
      <main className={style['counter-page']}></main>
    </CounterPageLayout>
  );
};

export default SuppliesCounterPage;
