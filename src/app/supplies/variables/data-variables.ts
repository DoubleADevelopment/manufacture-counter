enum SuppliesLogsNames {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum SuppliesSettingsNames {
  BASE_COUNTER_VALUE = 'baseCounterValue',
  BASE_CARDBOARD_VALUE = 'baseCardboardValue',
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
