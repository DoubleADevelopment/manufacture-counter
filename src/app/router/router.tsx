import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../../pages';
// import { ChemistryPage } from '../chemistry/pages';
//aps
import App from '../chemistry/app';
//variables
import { ComponentsRoutingPaths } from '../../variables/component-routing-variables';
import { AppRouting, rootBaseName } from '../../variables/app-routing-variables';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route index element={<Pages.MainPage />} />
        <Route path={AppRouting.INFORMATION.path} element={<Pages.InfoPage />} />
        <Route path={AppRouting.SETTINGS.path} element={<Pages.SettingsPage />} />
        <Route path={AppRouting.OVERVIEW.path} element={<Pages.OverviewPage />} />

        <Route path={`${ComponentsRoutingPaths.CHEMISTRY}/*`} element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
