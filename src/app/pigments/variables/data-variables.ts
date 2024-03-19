enum PigmentsLogsNames {
  CONTAINER = 'container',
  BAG = 'bag',
  COUNTER = 'counter',
}

enum PigmentsSettingsNames {
  BASE_BAG_VALUE = 'baseBagValue',
  BASE_CONTAINER_VALUE = 'baseContainerValue',
  CONTAINER_WEIGHT = 'containerWeight',
  BASE_COUNTER_VALUE = 'baseCounterValue',
}

const PIGMENTS_STORAGE_NAME = 'pigments-data';

enum PIGMENTS_COUNTERS {
  COUNTER = 'Licznik',
  BAGS = 'Worki',
  CONTAINER = 'Kontenery',
}

const pigmentsCountersList: PIGMENTS_COUNTERS[] = [
  PIGMENTS_COUNTERS.COUNTER,
  PIGMENTS_COUNTERS.BAGS,
  PIGMENTS_COUNTERS.CONTAINER,
];

export {
  PigmentsLogsNames,
  PigmentsSettingsNames,
  PIGMENTS_STORAGE_NAME,
  PIGMENTS_COUNTERS,
  pigmentsCountersList,
};
