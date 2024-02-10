//type
import type { IRouteItem } from '../types';

const enum ComponentsRoutingPaths {
  CHEMISTRY = 'chemistry',
  PIGMENTS = 'pigments',
  GUMS = 'gums',
}

const enum ComponentsRoutingNames {
  CHEMISTRY = 'CHEMISTRY',
  PIGMENTS = 'PIGMENTS',
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
  [ComponentsRoutingNames.PIGMENTS]: {
    title: 'Pigmenty',
    path: ComponentsRoutingPaths.PIGMENTS,
  },
};

export { ComponentsRoutingPaths, ComponentsRouting };
