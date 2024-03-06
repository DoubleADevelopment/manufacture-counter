import { Route, Routes } from 'react-router-dom';
//variables
import { GumsAppRouting } from '../variables';
//pages
import { GumsPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<GumsPage />} />
      <Route path={GumsAppRouting.COUNTER.route} element={<GumsPage />} />
    </Routes>
  );
};

export default Router;
