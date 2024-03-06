//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CountableItemInfo, Counter } from '../../components';
//variables
import { CounterText } from '../../../../variables';
import { ChemistryAppRouting, ChemistryPackagesNames } from '../../variables';
//style
import style from './counter-page.module.scss';

const ExtrusionCounterPage = (): JSX.Element => {
  return (
    // backLink={ChemistryAppRouting.EXTRUSION.path} commented while we chave only 1 package of chemistry
    <CounterPageLayout
      backLink={ChemistryAppRouting.ROOT.path}
      headerTitle={CounterText.CHEMISTRY_COUNTER_EXTRUSION}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo packageName={ChemistryPackagesNames.EXTRUSION} />
        <Counter packageName={ChemistryPackagesNames.EXTRUSION} />
      </main>
    </CounterPageLayout>
  );
};

export default ExtrusionCounterPage;
