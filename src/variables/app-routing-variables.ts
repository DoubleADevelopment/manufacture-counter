const rootBaseName = '/';

const enum AppRoutingPaths {
  ROOT = '/',
  SETTINGS = '/settings',
  INFORMATION = '/information',
  OVERVIEW = '/overview',
}

const enum AppRoutingNames {
  ROOT = 'ROOT',
  SETTINGS = 'SETTINGS',
  INFORMATION = 'INFORMATION',
  OVERVIEW = 'OVERVIEW',
}

interface IRouteItem {
  title: string;
  path: string;
}

type IAppRoutingType = Record<AppRoutingNames, IRouteItem>;

const AppRouting: IAppRoutingType = {
  [AppRoutingNames.ROOT]: {
    title: 'home',
    path: AppRoutingPaths.ROOT,
  },
  [AppRoutingNames.SETTINGS]: {
    title: 'settings',
    path: AppRoutingPaths.SETTINGS,
  },
  [AppRoutingNames.INFORMATION]: {
    title: 'information',
    path: AppRoutingPaths.INFORMATION,
  },
  [AppRoutingNames.OVERVIEW]: {
    title: 'overview',
    path: AppRoutingPaths.OVERVIEW,
  },
};

export { AppRoutingPaths, rootBaseName, AppRouting };
