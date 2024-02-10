import { Route, Routes } from 'react-router-dom';
//pages
import { PigmentsPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<PigmentsPage />} />
      <Route path={`counter`} element={<PigmentsPage />} />
    </Routes>
  );
};

export default Router;
