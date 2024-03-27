import { Route, Routes } from 'react-router-dom';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from '../store/slectors/selectors';
import { clearItemDataAction } from '../store/actions/actions';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { Counter } from '../components';
//variables
import { SUPPLIES_TEXT, SuppliesAppRouting } from '../variables';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetData}
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
            SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
            SelectorGetCurrentItemData={SelectorGetItemData}
            clearItemDataAction={clearItemDataAction}
          >
            <Counter />
          </CounterPage>
        }
      />
    </Routes>
  );
};

export default Router;
