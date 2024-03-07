//layouts
import { CounterPageLayout } from '../../../../layouts';
//variables
import { CounterText } from '../../../../variables';
import { GumsAppRouting } from '../../variables';
//styles
import style from './counter-page.module.scss';

const CounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout
      backLink={GumsAppRouting.ROOT.path}
      headerTitle={CounterText.GUMS_COUNTER_TITLE}
    >
      <main className={style['counter-page']}>
        {/* <CountableItemInfo packageName={ChemistryPackagesNames.EXTRUSION} />
        <Counter packageName={ChemistryPackagesNames.EXTRUSION} /> */}
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
