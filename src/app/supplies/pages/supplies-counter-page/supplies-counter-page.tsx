//layouts
import { CounterPageLayout } from '../../../../layouts';
import { CountableItemInfo } from '../../components';
//components
//variables
import { SuppliesAppRouting } from '../../variables';
//style
import style from './supplies-counter-page.module.scss';

const SuppliesCounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout backLink={SuppliesAppRouting.ROOT.path} headerTitle={'licznik komponentów'}>
      <main className={style['counter-page']}>
        <CountableItemInfo />
      </main>
    </CounterPageLayout>
  );
};

export default SuppliesCounterPage;
