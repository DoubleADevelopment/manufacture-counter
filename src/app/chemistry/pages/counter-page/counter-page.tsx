//layouts
import { PageWithHeaderLayout } from '../../../../layouts';
//components
import { CounterHeader, Counter } from '../../components';

const CounterPage = (): JSX.Element => {
  return (
    <PageWithHeaderLayout>
      <CounterHeader />
      <Counter />
    </PageWithHeaderLayout>
  );
};

export default CounterPage;
