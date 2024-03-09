//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { PigmentsAppRouting } from '../../variables';
//variables
import { CounterText } from '../../../../variables';
import { CountableItemInfo, Counter } from '../../components';
//styles
import style from './counter-page.module.scss';

const CounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout
      backLink={PigmentsAppRouting.ROOT.path}
      headerTitle={CounterText.GUMS_COUNTER_TITLE}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo />
        <Counter />
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
