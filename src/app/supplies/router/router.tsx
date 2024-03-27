import { Route, Routes } from 'react-router-dom';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentSupplie,
  SelectorGetSupplies,
} from '../store/slectors/selectors';
import { clearItemDataAction } from '../store/actions/actions';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { Counter } from '../components';
import { CountableItemInfo } from '../../../components';
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
            <CountableItemInfo
              SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
              SelectorGetCurrentItemData={SelectorGetCurrentSupplie}
              clearItemDataAction={clearItemDataAction}
            />
            <Counter />
          </CounterPage>
        }
      />
    </Routes>
  );
};

export default Router;
