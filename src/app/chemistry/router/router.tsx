import { Route, Routes } from 'react-router-dom';
//pages
import { ChemistryPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<ChemistryPage />} />
      <Route path={`counter`} element={<ChemistryPage />} />
    </Routes>
  );
};

export default Router;
