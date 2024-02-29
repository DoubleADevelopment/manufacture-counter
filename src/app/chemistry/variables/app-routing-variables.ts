//types
import type { IRouteItem } from '../../../types';
import { ComponentsRouting } from '../../../variables';

const CHEMISTRY_ROOT = ComponentsRouting.CHEMISTRY.route;

const enum ChemistryAppRoutingNames {
  ROOT = 'ROOT',
  EXTRUSION = 'EXTRUSION',
  VENEER = 'VENEER',
  COUNTER_EXTRUSION = 'COUNTER_EXTRUSION',
  COUNTER_VENEER = 'COUNTER_VENEER',
}

const ChemistryAppRoutes: Record<ChemistryAppRoutingNames, string> = {
  [ChemistryAppRoutingNames.ROOT]: '/',
  [ChemistryAppRoutingNames.EXTRUSION]: 'extrusion',
  [ChemistryAppRoutingNames.VENEER]: 'veener',
  [ChemistryAppRoutingNames.COUNTER_VENEER]: 'veener/:UNID',
  [ChemistryAppRoutingNames.COUNTER_EXTRUSION]: 'extrusion/:UNID',
};

const ChemistryAppPaths: Record<ChemistryAppRoutingNames, string> = {
  [ChemistryAppRoutingNames.ROOT]: `/${CHEMISTRY_ROOT}`,
  [ChemistryAppRoutingNames.EXTRUSION]: `/${CHEMISTRY_ROOT}/extrusion`,
  [ChemistryAppRoutingNames.VENEER]: `/${CHEMISTRY_ROOT}/veener`,
  [ChemistryAppRoutingNames.COUNTER_VENEER]: `/${CHEMISTRY_ROOT}/veener/:UNID`,
  [ChemistryAppRoutingNames.COUNTER_EXTRUSION]: `/${CHEMISTRY_ROOT}/extrusion/:UNID`,
};

const ChemistryAppRouting: Record<ChemistryAppRoutingNames, IRouteItem> = {
  [ChemistryAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    route: ChemistryAppRoutes.ROOT,
    path: ChemistryAppPaths.ROOT,
  },
  [ChemistryAppRoutingNames.EXTRUSION]: {
    title: 'Ekstruzja',
    route: ChemistryAppRoutes.EXTRUSION,
    path: ChemistryAppPaths.EXTRUSION,
  },
  [ChemistryAppRoutingNames.VENEER]: {
    title: 'Okleina',
    route: ChemistryAppRoutes.VENEER,
    path: ChemistryAppPaths.VENEER,
  },
  [ChemistryAppRoutingNames.COUNTER_EXTRUSION]: {
    title: 'Licznik - ekstruzja',
    route: ChemistryAppRoutes.COUNTER_EXTRUSION,
    path: ChemistryAppPaths.COUNTER_EXTRUSION,
  },
  [ChemistryAppRoutingNames.COUNTER_VENEER]: {
    title: 'Licznik - okleina',
    route: ChemistryAppRoutes.COUNTER_VENEER,
    path: ChemistryAppPaths.COUNTER_VENEER,
  },
};

export { ChemistryAppRouting };
