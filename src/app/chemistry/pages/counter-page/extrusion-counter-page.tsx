//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CountableItemInfo, Counter } from '../../components';
//variables
import { ChemistryAppRouting, ChemistryPackagesNames } from '../../variables';
//style
import style from './counter-page.module.scss';
import { CHEMISTRY_TEXT } from '../../variables';

const ExtrusionCounterPage = (): JSX.Element => {
  return (
    // backLink={ChemistryAppRouting.EXTRUSION.path} commented while we have only 1 package of chemistry
    <CounterPageLayout
      backLink={ChemistryAppRouting.ROOT.path}
      headerTitle={CHEMISTRY_TEXT.CHEMISTRY_COUNTER_TITLE}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo packageName={ChemistryPackagesNames.EXTRUSION} />
        <Counter packageName={ChemistryPackagesNames.EXTRUSION} />
      </main>
    </CounterPageLayout>
  );
};

export default ExtrusionCounterPage;
