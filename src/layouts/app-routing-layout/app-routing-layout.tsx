import { Route, Routes } from 'react-router-dom';
//pages
import { ComponentRootPage, CounterPage } from '../../pages';
import {
  ClearItemDataActionType,
  IChangeItemAdditionalSettingActionType,
  IncDecActionType,
  IRepository,
  ISelectorCheckIfElementExistsByUNID,
  ISelectorGetData,
  ISelectorGetItemData,
} from '../../types';

interface IAppRoutingLayoutProps {
  repository: IRepository;
  SelectorGetData: ISelectorGetData;
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
  SelectorGetItemData: ISelectorGetItemData;
  clearItemDataAction: ClearItemDataActionType;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  changeItemAdditionalSettingAction?: IChangeItemAdditionalSettingActionType;
}

const AppRoutingLayout = (props: IAppRoutingLayoutProps): JSX.Element => {
  const {
    repository,
    SelectorGetData,
    SelectorCheckIfElementExistsByUNID,
    SelectorGetItemData,
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

export default AppRoutingLayout;
