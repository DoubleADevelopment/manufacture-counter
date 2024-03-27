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
import { CountableItemInfo } from '../../../components';
//variables
import { PIGMENTS_TEXT, PigmentsAppRouting } from '../variables';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetData}
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
            <CountableItemInfo
              SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
              SelectorGetCurrentItemData={SelectorGetItemData}
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
