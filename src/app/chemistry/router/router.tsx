import { Route, Routes } from 'react-router-dom';
//variables
import { ChemistryAppRouting } from '../variables';
//pages
import * as Pages from '../pages';

const Router = (): JSX.Element => {
  return (
    <Routes>
      {/* commented while we chave only 1 package of chemistry */}
      {/* <Route index element={<Pages.ChemistryRootPage />} />  */}
      <Route index element={<Pages.ChemistryPages.ChemistryExtrusionPage />} />
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
      <Route
        path={ChemistryAppRouting.COUNTER.route}
        element={<Pages.CounterPages.ExtrusionCounterPage />}
      />
    </Routes>
  );
};

export default Router;
