import { Route, Routes } from 'react-router-dom';
//store
import { SelectorGetPigments } from '../store/slectors/selectors';
//variables
import { PIGMENTS_TEXT, PigmentsAppRouting } from '../variables';
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
            SelectorGetComponentState={SelectorGetPigments}
            headerTitle={PIGMENTS_TEXT.PIGMENTS}
          />
        }
      />
      <Route path={PigmentsAppRouting.COUNTER.route} element={<Pages.CounterPage />} />
    </Routes>
  );
};

export default Router;
