import { Route, Routes } from 'react-router-dom';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from '../store/slectors/selectors';
import {
  changeItemAdditionalSettingAction,
  clearItemDataAction,
  decrementAction,
  incrementAction,
} from '../store/actions/actions';
//repository
import pigmentsRepository from '../repository/pigments-repository';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//variables
import { PigmentsAppRouting } from '../variables';

const Router = (): JSX.Element => {
  const packageData = pigmentsRepository.getPackageData();

  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetData}
            headerTitle={packageData.packageTitle}
          />
        }
      />

      <Route
        path={PigmentsAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={PigmentsAppRouting.ROOT.path}
            headerTitle={packageData.packageCounterTitle}
            SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
            SelectorGetCurrentItemData={SelectorGetItemData}
            clearItemDataAction={clearItemDataAction}
            incrementAction={incrementAction}
            decrementAction={decrementAction}
            changeItemAdditionalSettingAction={changeItemAdditionalSettingAction}
          />
        }
      />
    </Routes>
  );
};

export default Router;
