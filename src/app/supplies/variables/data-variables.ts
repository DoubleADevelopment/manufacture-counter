enum SuppliesLogsNames {
  COUNTER = 'counter',
}

enum SuppliesSettingsNames {
  BASE_COUNTER_VALUE = 'baseCounterValue',
}

const SUPPLIES_STORAGE_NAME = 'supplies-data';

enum SUPPLIES_COUNTERS {
  COUNTER = 'Licznik',
  CARDBOARD = 'kartony',
}

const suppliesCountersList: SUPPLIES_COUNTERS[] = [SUPPLIES_COUNTERS.COUNTER];

export {
  SuppliesLogsNames,
  SuppliesSettingsNames,
  SUPPLIES_STORAGE_NAME,
  suppliesCountersList,
  SUPPLIES_COUNTERS,
};
