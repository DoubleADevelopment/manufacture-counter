//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CountableItemInfo, Counter } from '../../components';
//variables
import { PIGMENTS_TEXT, PigmentsAppRouting } from '../../variables';
//styles
import style from './counter-page.module.scss';

const CounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout
      backLink={PigmentsAppRouting.ROOT.path}
      headerTitle={PIGMENTS_TEXT.PIGMENTS_COUNTER_TITLE}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo />
        <Counter />
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
