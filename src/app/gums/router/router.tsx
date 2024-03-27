import { Route, Routes } from 'react-router-dom';
//store
import { SelectorGetGums } from '../store/slectors/selectors';
//variables
import { GUMS_TEXT, GumsAppRouting } from '../variables';
//pages
import * as Pages from '../pages';
import { ComponentRootPage } from '../../../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetGums}
            headerTitle={GUMS_TEXT.GUMS}
          />
        }
      />
      <Route path={GumsAppRouting.COUNTER.route} element={<Pages.CounterPage />} />
    </Routes>
  );
};

export default Router;
