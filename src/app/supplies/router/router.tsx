import { Route, Routes } from 'react-router-dom';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from '../store/slectors/selectors';
import {
  clearItemDataAction,
  changeItemAdditionalSettingAction,
  decrementAction,
  incrementAction,
} from '../store/actions/actions';
//repository
import suppliesRepository from '../repository/supplies-repository';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';

const Router = (): JSX.Element => {
  const packageData = suppliesRepository.getPackageData();

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
        path={'/:UNID'}
        element={
          <CounterPage
            backLink={`/${packageData.dataPackageName}`}
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
