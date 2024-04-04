import { Route, Routes } from 'react-router-dom';
//state
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetData,
  SelectorGetItemData,
} from '../store/slectors/selectors';
import { clearItemDataAction, decrementAction, incrementAction } from '../store/actions/actions';
//repository
import chemistryRepository from '../repository/chemistry-repository';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';

const Router = (): JSX.Element => {
  const packageData = chemistryRepository.getPackageData();

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
          />
        }
      />
    </Routes>
  );
};

export default Router;
