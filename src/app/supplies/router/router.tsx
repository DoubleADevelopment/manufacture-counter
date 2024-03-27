import { Route, Routes } from 'react-router-dom';
//store
import { SelectorGetSupplies } from '../store/slectors/selectors';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { CountableItemInfo, Counter } from '../components';
//variables
import { SUPPLIES_TEXT, SuppliesAppRouting } from '../variables';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetSupplies}
            headerTitle={SUPPLIES_TEXT.SUPPLIES}
          />
        }
      />
      <Route
        path={SuppliesAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={SuppliesAppRouting.ROOT.path}
            headerTitle={SUPPLIES_TEXT.SUPPLIES_COUNTER_TITLE}
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
