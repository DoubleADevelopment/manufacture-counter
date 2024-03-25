import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRouting } from '../variables';
//pages
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages.ChemistryRootPage />} />
      <Route path={ChemistryAppRouting.COUNTER.route} element={<Pages.CounterPage />} />
    </Routes>
  );
};

export default Router;
