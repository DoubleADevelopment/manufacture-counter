import { Route, Routes } from 'react-router-dom';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from '../store/slectors/selectors';
import {
  clearItemDataAction,
  decrementAction,
  incrementAction,
  changeItemAdditionalSettingAction,
} from '../store/actions/actions';
//repository
import gumsRepository from '../repository/gums-repository';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//variables
import { GumsAppRouting } from '../variables';

const Router = (): JSX.Element => {
  const packageData = gumsRepository.getPackageData();

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
        path={GumsAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={GumsAppRouting.ROOT.path}
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
