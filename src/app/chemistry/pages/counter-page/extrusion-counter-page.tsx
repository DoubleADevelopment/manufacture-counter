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
    <CounterPageLayout
      backLink={ChemistryAppRouting.EXTRUSION.path}
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
