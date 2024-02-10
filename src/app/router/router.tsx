import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../../pages';
// import { ChemistryPage } from '../chemistry/pages';
//aps
import ChemistryApp from '../chemistry/app';
import GumsApp from '../gums/app';
import PigmentsApp from '../pigments/app';
//variables
import { ComponentsRouting } from '../../variables/component-routing-variables';
import { AppRouting, rootBaseName } from '../../variables/app-routing-variables';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route index element={<Pages.MainPage />} />
        <Route path={AppRouting.INFORMATION.path} element={<Pages.InfoPage />} />
        <Route path={AppRouting.SETTINGS.path} element={<Pages.SettingsPage />} />
        <Route
          path={AppRouting.COMPONENTS_OVERVIEW.path}
          element={<Pages.ComponentOverviewPage />}
        />

        <Route path={`${ComponentsRouting.CHEMISTRY.path}/*`} element={<ChemistryApp />} />
        <Route path={`${ComponentsRouting.GUMS.path}/*`} element={<GumsApp />} />
        <Route path={`${ComponentsRouting.PIGMENTS.path}/*`} element={<PigmentsApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
