import { Route, Routes } from 'react-router-dom';
//variables
import { SuppliesAppRouting } from '../variables';
//pages
// import * as Pages from '../pages';
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages.SuppliesRootPage />} />

      <Route path={SuppliesAppRouting.COUNTER.route} element={<Pages.SuppliesCounterPage />} />
    </Routes>
  );
};

export default Router;
