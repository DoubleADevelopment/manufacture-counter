import { Route, Routes } from 'react-router-dom';
//variables
import { GumsAppRouting } from '../variables';
//pages
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages.GumsPage />} />
      <Route path={GumsAppRouting.COUNTER.route} element={<Pages.GumsPage />} />
    </Routes>
  );
};

export default Router;
