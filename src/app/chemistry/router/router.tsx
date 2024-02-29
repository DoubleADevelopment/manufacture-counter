import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRouting } from '../variables';
//pages
import {
  ExtrusionCounterPage,
  PackagesOverviewPage,
  VeneerCounterPage,
  ExtrusionPage,
  VeneerPage,
} from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<PackagesOverviewPage />} />
      <Route path={ChemistryAppRouting.EXTRUSION.route} element={<ExtrusionPage />} />
      <Route path={ChemistryAppRouting.VENEER.route} element={<VeneerPage />} />
      <Route
        path={ChemistryAppRouting.COUNTER_EXTRUSION.route}
        element={<ExtrusionCounterPage />}
      />
      <Route path={ChemistryAppRouting.COUNTER_VENEER.route} element={<VeneerCounterPage />} />
    </Routes>
  );
};

export default Router;
