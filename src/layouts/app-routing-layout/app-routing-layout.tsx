import { Route, Routes } from 'react-router-dom';
//pages
import { ComponentRootPage, CounterPage } from '../../pages';
//types
import type {
  ClearItemDataActionType,
  IChangeItemAdditionalSettingActionType,
  IncDecActionType,
  IRepository,
  ISelectors,
} from '../../types';

interface IAppRoutingLayoutProps {
  repository: IRepository;
  Selectors: ISelectors;
  clearItemDataAction: ClearItemDataActionType;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  changeItemAdditionalSettingAction?: IChangeItemAdditionalSettingActionType;
}

const AppRoutingLayout = (props: IAppRoutingLayoutProps): JSX.Element => {
  const {
    repository,
    Selectors,
    clearItemDataAction,
    incrementAction,
    decrementAction,
    changeItemAdditionalSettingAction,
  } = props;
  const packageData = repository.getPackageData();

  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={Selectors.SelectorGetData}
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
            SelectorCheckIfElementExistsByUNID={Selectors.SelectorCheckIfElementExistsByUNID}
            SelectorGetCurrentItemData={Selectors.SelectorGetItemData}
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

export default AppRoutingLayout;
