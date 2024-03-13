//type
import type { IRouteItem } from '../types';

const rootBaseName = '/aluplast-component-counter';

const enum AppRoutingNames {
  ROOT = 'ROOT',
  SETTINGS = 'SETTINGS',
  INFORMATION = 'INFORMATION',
  COMPONENTS_OVERVIEW = 'COMPONENTS_OVERVIEW',
}

const AppRoutes: Record<AppRoutingNames, string> = {
  [AppRoutingNames.ROOT]: '/',
  [AppRoutingNames.SETTINGS]: 'settings',
  [AppRoutingNames.INFORMATION]: 'information',
  [AppRoutingNames.COMPONENTS_OVERVIEW]: 'components-overview',
};

const AppPaths: Record<AppRoutingNames, string> = {
  [AppRoutingNames.ROOT]: '/',
  [AppRoutingNames.SETTINGS]: '/settings',
  [AppRoutingNames.INFORMATION]: '/information',
  [AppRoutingNames.COMPONENTS_OVERVIEW]: '/components-overview',
};

const AppRouting: Record<AppRoutingNames, IRouteItem> = {
  [AppRoutingNames.ROOT]: {
    title: 'Strona główna',
    route: AppRoutes.ROOT,
    path: AppPaths.ROOT,
  },
  [AppRoutingNames.SETTINGS]: {
    title: 'Ustawienia',
    route: AppRoutes.SETTINGS,
    path: AppPaths.SETTINGS,
  },
  [AppRoutingNames.INFORMATION]: {
    title: 'Informacja',
    route: AppRoutes.INFORMATION,
    path: AppPaths.INFORMATION,
  },
  [AppRoutingNames.COMPONENTS_OVERVIEW]: {
    title: 'Przegląd komponentów',
    route: AppRoutes.COMPONENTS_OVERVIEW,
    path: AppPaths.COMPONENTS_OVERVIEW,
  },
};

export { AppRouting, rootBaseName };
