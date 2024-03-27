import { Route, Routes } from 'react-router-dom';
//store
import { SelectorGetPigments } from '../store/slectors/selectors';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { CountableItemInfo, Counter } from '../components';
//variables
import { PIGMENTS_TEXT, PigmentsAppRouting } from '../variables';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetPigments}
            headerTitle={PIGMENTS_TEXT.PIGMENTS}
          />
        }
      />
      <Route
        path={PigmentsAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={PigmentsAppRouting.ROOT.path}
            headerTitle={PIGMENTS_TEXT.PIGMENTS_COUNTER_TITLE}
          >
            <CountableItemInfo />
            <Counter />
          </CounterPage>
        }
      />
    </Routes>
  );
};

export default Router;
