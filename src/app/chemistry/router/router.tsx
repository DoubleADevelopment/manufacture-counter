import { Route, Routes } from 'react-router-dom';
//state
import { SelectorGetChemistry } from '../store/slectors/selectors';
//variables
import { CHEMISTRY_TEXT, ChemistryAppRouting } from '../variables';
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
            SelectorGetComponentState={SelectorGetChemistry}
            headerTitle={CHEMISTRY_TEXT.CHEMISTRY}
          />
        }
      />
      <Route path={ChemistryAppRouting.COUNTER.route} element={<Pages.CounterPage />} />
    </Routes>
  );
};

export default Router;
