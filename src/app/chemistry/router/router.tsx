import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRouting } from '../variables';
//pages
import { CounterPage, PackagesOverviewPage } from '../pages';
import { EkstruzjaPage } from '../pages/chemistry-package-pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<PackagesOverviewPage />} />
      <Route path={ChemistryAppRouting.EXTRUSION.path} element={<EkstruzjaPage />} />
      <Route path={ChemistryAppRouting.VENEER.path} element={<EkstruzjaPage />} />
      <Route path={ChemistryAppRouting.COUNTER_EXTRUSION.path} element={<CounterPage />} />
      <Route path={ChemistryAppRouting.COUNTER_VENEER.path} element={<CounterPage />} />
    </Routes>
  );
};

export default Router;
