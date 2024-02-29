import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRouting } from '../variables';
//pages
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages.ChemistryRootPage />} />
      <Route
        path={ChemistryAppRouting.EXTRUSION.route}
        element={<Pages.ChemistryPages.ChemistryExtrusionPage />}
      />
      <Route
        path={ChemistryAppRouting.VENEER.route}
        element={<Pages.ChemistryPages.ChemistryVeneerPage />}
      />
      <Route
        path={ChemistryAppRouting.COUNTER_EXTRUSION.route}
        element={<Pages.CounterPages.ExtrusionCounterPage />}
      />
      <Route
        path={ChemistryAppRouting.COUNTER_VENEER.route}
        element={<Pages.CounterPages.VeneerCounterPage />}
      />
    </Routes>
  );
};

export default Router;
