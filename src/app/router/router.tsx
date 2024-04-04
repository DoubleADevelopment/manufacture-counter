import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../../pages';
//aps
import ChemistryApp from '../chemistry';
import GumsApp from '../gums';
import PigmentsApp from '../pigments';
import SuppliesApp from '../supplies';
//apps repository
import chemistryRepository from '../chemistry/repository/chemistry-repository';
import gumsRepository from '../gums/repository/gums-repository';
import suppliesRepository from '../supplies/repository/supplies-repository';
import pigmentsRepository from '../pigments/repository/pigments-repository';
//variables
import { AppRouting, rootBaseName } from '../../variables';

const Router = (): JSX.Element => {
  const chemistryRootPath = chemistryRepository.getPackageData().dataPackageName;
  const gumsRootPath = gumsRepository.getPackageData().dataPackageName;
  const suppliesRootPath = suppliesRepository.getPackageData().dataPackageName;
  const pigmentsRootPath = pigmentsRepository.getPackageData().dataPackageName;

  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route index element={<Pages.MainPage />} />
        <Route path={AppRouting.INFORMATION.route} element={<Pages.InfoPage />} />
        <Route path={AppRouting.SETTINGS.route} element={<Pages.SettingsPage />} />
        <Route
          path={AppRouting.COMPONENTS_OVERVIEW.route}
          element={<Pages.ComponentOverviewPage />}
        />

        <Route path={`${chemistryRootPath}/*`} element={<ChemistryApp />} />
        <Route path={`${gumsRootPath}/*`} element={<GumsApp />} />
        <Route path={`${pigmentsRootPath}/*`} element={<PigmentsApp />} />
        <Route path={`${suppliesRootPath}/*`} element={<SuppliesApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
