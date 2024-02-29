//types
import type { IRouteItem } from '../../../types';

const enum ChemistryAppRoutes {
  ROOT = '/',
  EXTRUSION = 'extrusion',
  VENEER = 'veener',
  COUNTER_VENEER = 'veener/:UNID',
  COUNTER_EXTRUSION = 'extrusion/:UNID',
}

const enum ChemistryAppPaths {
  ROOT = '/chemistry',
  EXTRUSION = '/chemistry/extrusion',
  VENEER = '/chemistry/veener',
  COUNTER_VENEER = '/chemistry/veener/:UNID',
  COUNTER_EXTRUSION = '/chemistry/extrusion/:UNID',
}

const enum ChemistryAppRoutingNames {
  ROOT = 'ROOT',
  EXTRUSION = 'EXTRUSION',
  VENEER = 'VENEER',
  COUNTER_EXTRUSION = 'COUNTER_EXTRUSION',
  COUNTER_VENEER = 'COUNTER_VENEER',
}

type IAppRoutingType = Record<ChemistryAppRoutingNames, IRouteItem>;

const ChemistryAppRouting: IAppRoutingType = {
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
