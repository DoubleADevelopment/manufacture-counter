//types
import type { IRouteItem } from '../../../types';
//variables
import { ComponentsRouting } from '../../../variables';

const PIGMENTS_ROOT = ComponentsRouting.PIGMENTS.route;

const enum PigmentsAppRoutingNames {
  ROOT = 'ROOT',
  COUNTER = 'COUNTER',
}

const PigmentsAppRoutes: Record<PigmentsAppRoutingNames, string> = {
  [PigmentsAppRoutingNames.ROOT]: '/',
  [PigmentsAppRoutingNames.COUNTER]: '/:UNID',
};

const PigmentsAppPaths: Record<PigmentsAppRoutingNames, string> = {
  [PigmentsAppRoutingNames.ROOT]: `/${PIGMENTS_ROOT}`,
  [PigmentsAppRoutingNames.COUNTER]: `/${PIGMENTS_ROOT}/:UNID`,
};

const PigmentsAppRouting: Record<PigmentsAppRoutingNames, IRouteItem> = {
  [PigmentsAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    route: PigmentsAppRoutes.ROOT,
    path: PigmentsAppPaths.ROOT,
  },
  [PigmentsAppRoutingNames.COUNTER]: {
    title: 'Licznik pigmenty',
    route: PigmentsAppRoutes.COUNTER,
    path: PigmentsAppPaths.COUNTER,
  },
};

export { PigmentsAppRouting };
