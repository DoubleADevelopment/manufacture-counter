//types
import type { IRouteItem } from '../../../types';

const enum ChemistryAppRoutingPaths {
  ROOT = '/',
  EKSTRUZJA = 'ekstruzja',
  OKLEINA = 'okleina',
  COUNTER_OKLEINA = 'okleina/:UNID',
  COUNTER_EKSTRUZJA = 'ekstruzja/:UNID',
  COUNTER = '/:UNID',
}

const enum ChemistryAppRoutingNames {
  ROOT = 'ROOT',
  EKSTRUZJA = 'EKSTRUZJA',
  OKLEINA = 'OKLEINA',
  COUNTER_EKSTRUZJA = 'COUNTER_EKSTRUZJA',
  COUNTER_OKLEINA = 'COUNTER_OKLEINA',
}

type IAppRoutingType = Record<ChemistryAppRoutingNames, IRouteItem>;

const ChemistryAppRouting: IAppRoutingType = {
  [ChemistryAppRoutingNames.ROOT]: {
    title: 'Strona główna',
    path: ChemistryAppRoutingPaths.ROOT,
  },
  [ChemistryAppRoutingNames.EKSTRUZJA]: {
    title: 'Ekstruzja',
    path: ChemistryAppRoutingPaths.EKSTRUZJA,
  },
  [ChemistryAppRoutingNames.OKLEINA]: {
    title: 'Okleina',
    path: ChemistryAppRoutingPaths.OKLEINA,
  },
  [ChemistryAppRoutingNames.COUNTER_EKSTRUZJA]: {
    title: 'Licznik - ekstruzja',
    path: ChemistryAppRoutingPaths.EKSTRUZJA,
  },
  [ChemistryAppRoutingNames.COUNTER_OKLEINA]: {
    title: 'Licznik - okleina',
    path: ChemistryAppRoutingPaths.OKLEINA,
  },
};

export { ChemistryAppRoutingPaths, ChemistryAppRoutingNames, ChemistryAppRouting };
