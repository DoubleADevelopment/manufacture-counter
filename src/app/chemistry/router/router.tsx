import { Route, Routes } from 'react-router-dom';
//state
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetChemistry,
  SelectorGetCurrentChemistry,
} from '../store/slectors/selectors';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { Counter } from '../components';
import { CountableItemInfo } from '../../../components';
//variables
import { CHEMISTRY_TEXT, ChemistryAppRouting } from '../variables';
import { clearItemDataAction } from '../store/actions/actions';

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
            <CountableItemInfo
              SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
              SelectorGetCurrentItemData={SelectorGetCurrentChemistry}
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
