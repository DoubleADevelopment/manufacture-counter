import { Route, Routes } from 'react-router-dom';
//store
import { SelectorGetSupplies } from '../store/slectors/selectors';
//variables
import { SUPPLIES_TEXT, SuppliesAppRouting } from '../variables';
//pages
import * as Pages from '../pages';
import { ComponentRootPage } from '../../../pages';

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

      <Route path={SuppliesAppRouting.COUNTER.route} element={<Pages.SuppliesCounterPage />} />
    </Routes>
  );
};

export default Router;
