import { Route, Routes } from 'react-router-dom';
//state
import { SelectorGetChemistry } from '../store/slectors/selectors';
//variables
import { CHEMISTRY_TEXT, ChemistryAppRouting } from '../variables';
//pages
// import * as Pages from '../pages';
import { ComponentRootPage, CounterPage } from '../../../pages';
import { CountableItemInfo, Counter } from '../components';

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

      <Route
        path={ChemistryAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={ChemistryAppRouting.ROOT.path}
            headerTitle={CHEMISTRY_TEXT.CHEMISTRY_COUNTER_TITLE}
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
