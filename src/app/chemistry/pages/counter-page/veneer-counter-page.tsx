//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CountableItemInfo, Counter } from '../../components/';
//variables
import { CounterText } from '../../../../variables';
import { ChemistryAppRouting, ChemistryPackagesNames } from '../../variables';
//style
import style from './counter-page.module.scss';

const VeneerCounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout
      backLink={ChemistryAppRouting.VENEER.path}
      headerTitle={CounterText.CHEMISTRY_COUNTER_VENEER}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo packageName={ChemistryPackagesNames.VENEER} />
        <Counter packageName={ChemistryPackagesNames.VENEER} />
      </main>
    </CounterPageLayout>
  );
};

export default VeneerCounterPage;
