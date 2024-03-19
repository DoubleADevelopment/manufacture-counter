enum GumsLogsNames {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum GumsSettingsNames {
  BASE_CARDBOARD_VALUE = 'baseCardboardValue',
  BASE_COUNTER_VALUE = 'baseCounterValue',
}

const GUMS_STORAGE_NAME = 'gums-data';

enum GUMS_COUNTERS {
  COUNTER = 'Licznik',
  CARDBOARD = 'Kartony',
}

const gumsCountersList: GUMS_COUNTERS[] = [GUMS_COUNTERS.COUNTER, GUMS_COUNTERS.CARDBOARD];

export { GumsLogsNames, GumsSettingsNames, GUMS_STORAGE_NAME, GUMS_COUNTERS, gumsCountersList };
