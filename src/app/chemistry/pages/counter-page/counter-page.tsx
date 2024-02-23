//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CounterHeader, Counter } from '../../components';
import { CountableItemInfo } from '../../../../components';
//variables
import { ChemistryAppRouting, CounterText } from '../../../../variables';

const CounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout>
      <CounterHeader
        backLinkPath={ChemistryAppRouting.ROOT}
        headerTitle={CounterText.CHEMISTRY_COUNTER_TITLE}
      />
      <CountableItemInfo />
      <Counter />
    </CounterPageLayout>
  );
};

export default CounterPage;
