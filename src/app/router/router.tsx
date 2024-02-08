import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../../pages';
import { ChemistryPage } from '../chemistry/pages';
//variables
import { ComponentsRoutingPaths } from '../../variables/component-routing-variables';
import { AppRoutingPaths, rootBaseName } from '../../variables/app-routing-variables';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route path={AppRoutingPaths.ROOT} element={<Pages.MainPage />} />
        <Route path={AppRoutingPaths.INFORMATION} element={<Pages.InfoPage />} />
        <Route path={AppRoutingPaths.SETTINGS} element={<Pages.SettingsPage />} />
        <Route path={AppRoutingPaths.OVERVIEW} element={<Pages.OverviewPage />} />

        <Route path={ComponentsRoutingPaths.CHEMISTRY} element={<ChemistryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
