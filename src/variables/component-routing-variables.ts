//type
import type { IRouteItem } from '../types';

const enum ComponentsRoutingNames {
  CHEMISTRY = 'CHEMISTRY',
  PIGMENTS = 'PIGMENTS',
  GUMS = 'GUMS',
  SUPPLIES = 'SUPPLIES',
}

const ComponentsRoutes: Record<ComponentsRoutingNames, string> = {
  [ComponentsRoutingNames.CHEMISTRY]: 'chemistry',
  [ComponentsRoutingNames.PIGMENTS]: 'pigments',
  [ComponentsRoutingNames.GUMS]: 'gums',
  [ComponentsRoutingNames.SUPPLIES]: 'supplies',
};

const ComponentsPaths: Record<ComponentsRoutingNames, string> = {
  [ComponentsRoutingNames.CHEMISTRY]: '/chemistry',
  [ComponentsRoutingNames.PIGMENTS]: '/pigments',
  [ComponentsRoutingNames.GUMS]: '/gums',
  [ComponentsRoutingNames.SUPPLIES]: '/supplies',
};

const ComponentsRouting: Record<ComponentsRoutingNames, IRouteItem> = {
  [ComponentsRoutingNames.CHEMISTRY]: {
    title: 'Chemia',
    route: ComponentsRoutes.CHEMISTRY,
    path: ComponentsPaths.CHEMISTRY,
  },
  [ComponentsRoutingNames.GUMS]: {
    title: 'Uszczelka',
    route: ComponentsRoutes.GUMS,
    path: ComponentsPaths.GUMS,
  },
  [ComponentsRoutingNames.PIGMENTS]: {
    title: 'Pigmenty',
    route: ComponentsRoutes.PIGMENTS,
    path: ComponentsPaths.PIGMENTS,
  },
  [ComponentsRoutingNames.SUPPLIES]: {
    title: 'Komponenty',
    route: ComponentsRoutes.SUPPLIES,
    path: ComponentsPaths.SUPPLIES,
  },
};

export { ComponentsRouting };
