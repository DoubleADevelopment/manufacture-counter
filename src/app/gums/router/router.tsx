import { Route, Routes } from 'react-router-dom';
//store
import { SelectorGetGums } from '../store/slectors/selectors';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { CountableItemInfo, Counter } from '../components';
//variables
import { GUMS_TEXT, GumsAppRouting } from '../variables';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetGums}
            headerTitle={GUMS_TEXT.GUMS}
          />
        }
      />

      <Route
        path={GumsAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={GumsAppRouting.ROOT.path}
            headerTitle={GUMS_TEXT.GUMS_COUNTER_TITLE}
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
