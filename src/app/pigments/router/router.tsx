import { Route, Routes } from 'react-router-dom';
//variables
import { PigmentsAppRouting } from '../variables';
//pages
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages.PigmentsRootPage />} />
      <Route path={PigmentsAppRouting.COUNTER.route} element={<Pages.CounterPage />} />
    </Routes>
  );
};

export default Router;
