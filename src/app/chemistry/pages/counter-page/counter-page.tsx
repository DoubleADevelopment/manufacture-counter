//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CountableItemInfo, Counter } from '../../components/';
//variables
import { CounterText } from '../../../../variables';
//style
import style from './counter-page.module.scss';
import { ChemistryAppRoutingPaths } from '../../variables';
import { ChemistryPackagesNames } from '../../variables/data-variables';

const CounterPage = (): JSX.Element => {
  // ChemistryPackagesNames

  return (
    <CounterPageLayout
      backLink={ChemistryAppRoutingPaths.ROOT}
      headerTitle={CounterText.CHEMISTRY_COUNTER_TITLE}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo packageName={ChemistryPackagesNames.EXTRUSION} />
        <Counter packageName={ChemistryPackagesNames.EXTRUSION} />
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
