import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRoutingPaths } from '../variables';
//pages
import { CounterPage, PackagesOverviewPage } from '../pages';
import { EkstruzjaPage } from '../pages/chemistry-package-pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<PackagesOverviewPage />} />
      <Route path={ChemistryAppRoutingPaths.EKSTRUZJA} element={<EkstruzjaPage />} />
      <Route path={ChemistryAppRoutingPaths.OKLEINA} element={<EkstruzjaPage />} />
      {/* <Route path={ChemistryAppRoutingPaths.COUNTER} element={<CounterPage />} /> */}
      <Route path={ChemistryAppRoutingPaths.COUNTER_EKSTRUZJA} element={<CounterPage />} />
      <Route path={ChemistryAppRoutingPaths.COUNTER_OKLEINA} element={<CounterPage />} />
      {/* <Route index element={<ChemistryPage />} />
      <Route path={ChemistryAppRoutingPaths.COUNTER} element={<CounterPage />} />
      <Route path={ChemistryAppRoutingPaths.COMPONENTS_OVERVIEW} element={<PackagesOverviewPage />} /> */}
    </Routes>
  );
};

export default Router;
