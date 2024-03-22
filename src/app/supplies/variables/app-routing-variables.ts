//types
import type { IRouteItem } from '../../../types';
import { ComponentsRouting } from '../../../variables';

const SUPPLIES_ROOT = ComponentsRouting.SUPPLIES.route;

const enum SuppliesAppRoutingNames {
  ROOT = 'ROOT',
  COUNTER = 'COUNTER',
}

const SuppliesAppRoutes: Record<SuppliesAppRoutingNames, string> = {
  [SuppliesAppRoutingNames.ROOT]: '/',
  [SuppliesAppRoutingNames.COUNTER]: '/:UNID',
};

const SuppliesAppPaths: Record<SuppliesAppRoutingNames, string> = {
  [SuppliesAppRoutingNames.ROOT]: `/${SUPPLIES_ROOT}`,
  [SuppliesAppRoutingNames.COUNTER]: `/${SUPPLIES_ROOT}/:UNID`,
};

const SuppliesAppRouting: Record<SuppliesAppRoutingNames, IRouteItem> = {
  [SuppliesAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    route: SuppliesAppRoutes.ROOT,
    path: SuppliesAppPaths.ROOT,
  },
  [SuppliesAppRoutingNames.COUNTER]: {
    title: 'Licznik chemia',
    route: SuppliesAppRoutes.COUNTER,
    path: SuppliesAppPaths.COUNTER,
  },
};

export { SuppliesAppRouting };
