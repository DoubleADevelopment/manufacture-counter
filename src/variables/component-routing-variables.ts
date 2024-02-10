//type
import type { IRouteItem } from '../types';

const enum ComponentsRoutingPaths {
  CHEMISTRY = 'chemistry',
  PIGMENT = 'pigments',
  GUMS = 'gums',
}

const enum ComponentsRoutingNames {
  CHEMISTRY = 'CHEMISTRY',
  PIGMENT = 'PIGMENTS',
  GUMS = 'GUMS',
}

type IComponentsRoutingType = Record<ComponentsRoutingNames, IRouteItem>;

const ComponentsRouting: IComponentsRoutingType = {
  [ComponentsRoutingNames.CHEMISTRY]: {
    title: 'Chemia',
    path: ComponentsRoutingPaths.CHEMISTRY,
  },
  [ComponentsRoutingNames.GUMS]: {
    title: 'Uszczelka',
    path: ComponentsRoutingPaths.GUMS,
  },
  [ComponentsRoutingNames.PIGMENT]: {
    title: 'Pigmenty',
    path: ComponentsRoutingPaths.PIGMENT,
  },
};

export { ComponentsRoutingPaths, ComponentsRouting };
