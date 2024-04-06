import { Route, Routes } from 'react-router-dom';
//pages
import { ComponentRootPage, CounterPage } from '../../pages';
//types
import type { IActions, IRepository, ISelectors } from '../../types';

interface IAppRoutingLayoutProps {
  repository: IRepository;
  Selectors: ISelectors;
  Actions: IActions;
}

const AppRoutingLayout = (props: IAppRoutingLayoutProps): JSX.Element => {
  const { repository, Selectors, Actions } = props;
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
            Selectors={Selectors}
            Actions={Actions}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutingLayout;
