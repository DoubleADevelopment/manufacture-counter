import { Route, Routes } from 'react-router-dom';
//variables
import { CounterRouting } from '../variables/';
//pages
import { ChemistryPage, CounterPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<ChemistryPage />} />
      <Route path={CounterRouting.COUNTER} element={<CounterPage />} />
    </Routes>
  );
};

export default Router;
