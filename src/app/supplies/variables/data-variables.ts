enum SuppliesLogsNames {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum SuppliesSettingsNames {
  BASE_COUNTER_VALUE = 'baseCounterValue',
  BASE_CARDBOARD_VALUE = 'baseCardboardValue',
}

enum SUPPLIES_COUNTERS {
  COUNTER = 'Licznik',
  CARDBOARD = 'kartony',
}

const suppliesCountersList: SUPPLIES_COUNTERS[] = [SUPPLIES_COUNTERS.COUNTER];

export { SuppliesLogsNames, SuppliesSettingsNames, suppliesCountersList, SUPPLIES_COUNTERS };
