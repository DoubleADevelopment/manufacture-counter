import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRouting } from '../../../variables';
//pages
import { ChemistryPage, CounterPage } from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<ChemistryPage />} />
      <Route path={ChemistryAppRouting.COUNTER} element={<CounterPage />} />
    </Routes>
  );
};

export default Router;
