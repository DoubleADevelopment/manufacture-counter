import { Route, Routes } from 'react-router-dom';
//pages
import { ChemistryPage, CounterPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<ChemistryPage />} />
      <Route path={`/:unid`} element={<CounterPage />} />
    </Routes>
  );
};

export default Router;
