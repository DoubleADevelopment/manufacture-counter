import { Route, Routes } from 'react-router-dom';
//pages
import { GumsPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<GumsPage />} />
      <Route path={`counter`} element={<GumsPage />} />
    </Routes>
  );
};

export default Router;
