//type
import type { IRouteItem } from '../types';

const rootBaseName = '/';

const enum AppRoutingPaths {
  ROOT = '/',
  SETTINGS = '/settings',
  INFORMATION = '/information',
  COMPONENTS_OVERVIEW = '/components-overview',
}

const enum AppRoutingNames {
  ROOT = 'ROOT',
  SETTINGS = 'SETTINGS',
  INFORMATION = 'INFORMATION',
  COMPONENTS_OVERVIEW = 'COMPONENTS_OVERVIEW',
}

type IAppRoutingType = Record<AppRoutingNames, IRouteItem>;

const AppRouting: IAppRoutingType = {
  [AppRoutingNames.ROOT]: {
    title: 'Strona główna',
    path: AppRoutingPaths.ROOT,
  },
  [AppRoutingNames.SETTINGS]: {
    title: 'Ustawienia',
    path: AppRoutingPaths.SETTINGS,
  },
  [AppRoutingNames.INFORMATION]: {
    title: 'Informacja',
    path: AppRoutingPaths.INFORMATION,
  },
  [AppRoutingNames.COMPONENTS_OVERVIEW]: {
    title: 'Przegląd komponentów',
    path: AppRoutingPaths.COMPONENTS_OVERVIEW,
  },
};

export { AppRoutingPaths, rootBaseName, AppRouting, AppRoutingNames };
