import { Route, Routes } from 'react-router-dom';
//variables
import { GumsAppRouting } from '../variables';
//pages
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages.GumsRootPage />} />
      <Route path={GumsAppRouting.COUNTER.route} element={<Pages.GumsRootPage />} />
    </Routes>
  );
};

export default Router;
