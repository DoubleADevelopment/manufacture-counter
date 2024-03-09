//types
import type { IRouteItem } from '../../../types';
//variables
import { ComponentsRouting } from '../../../variables';

const GUMS_ROOT = ComponentsRouting.GUMS.route;

const enum GumsAppRoutingNames {
  ROOT = 'ROOT',
  COUNTER = 'COUNTER',
}

const GumsAppRoutes: Record<GumsAppRoutingNames, string> = {
  [GumsAppRoutingNames.ROOT]: '/',
  [GumsAppRoutingNames.COUNTER]: '/:UNID',
};

const GumsAppPaths: Record<GumsAppRoutingNames, string> = {
  [GumsAppRoutingNames.ROOT]: `/${GUMS_ROOT}`,
  [GumsAppRoutingNames.COUNTER]: `/${GUMS_ROOT}/:UNID`,
};

const GumsAppRouting: Record<GumsAppRoutingNames, IRouteItem> = {
  [GumsAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    route: GumsAppRoutes.ROOT,
    path: GumsAppPaths.ROOT,
  },
  [GumsAppRoutingNames.COUNTER]: {
    title: 'Licznik guma',
    route: GumsAppRoutes.COUNTER,
    path: GumsAppPaths.COUNTER,
  },
};

export { GumsAppRouting };
