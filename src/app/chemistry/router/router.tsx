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
      <Route path={ChemistryAppRouting.EXTRUSION.path} element={<ExtrusionPage />} />
      <Route path={ChemistryAppRouting.VENEER.path} element={<VeneerPage />} />
      <Route path={ChemistryAppRouting.COUNTER_EXTRUSION.path} element={<ExtrusionCounterPage />} />
      <Route path={ChemistryAppRouting.COUNTER_VENEER.path} element={<VeneerCounterPage />} />
    </Routes>
  );
};

export default Router;
