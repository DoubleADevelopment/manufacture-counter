//types
import type { IRouteItem } from '../../../types';
import { ComponentsRouting } from '../../../variables';

const CHEMISTRY_ROOT = ComponentsRouting.CHEMISTRY.route;

const enum ChemistryAppRoutingNames {
  ROOT = 'ROOT',
  COUNTER = 'COUNTER',
}

const ChemistryAppRoutes: Record<ChemistryAppRoutingNames, string> = {
  [ChemistryAppRoutingNames.ROOT]: '/',
  [ChemistryAppRoutingNames.COUNTER]: '/:UNID',
};

const ChemistryAppPaths: Record<ChemistryAppRoutingNames, string> = {
  [ChemistryAppRoutingNames.ROOT]: `/${CHEMISTRY_ROOT}`,
  [ChemistryAppRoutingNames.COUNTER]: `/${CHEMISTRY_ROOT}/:UNID`,
};

const ChemistryAppRouting: Record<ChemistryAppRoutingNames, IRouteItem> = {
  [ChemistryAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    route: ChemistryAppRoutes.ROOT,
    path: ChemistryAppPaths.ROOT,
  },
  [ChemistryAppRoutingNames.COUNTER]: {
    title: 'Licznik chemia',
    route: ChemistryAppRoutes.COUNTER,
    path: ChemistryAppPaths.COUNTER,
  },
};

export { ChemistryAppRouting };
