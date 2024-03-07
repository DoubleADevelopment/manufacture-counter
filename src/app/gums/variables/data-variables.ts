enum GumsLogsNames {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum GumsSettingsNames {
  BASE_CARDBOARD_VALUE = 'baseCardboardValue',
}

const GUMS_STORAGE_NAME = 'gums-data';

enum GUMS_COUNTERS {
  COUNTER = 'licznik',
  CARDBOARD = 'kartony',
}

const gumsCountersList: GUMS_COUNTERS[] = [GUMS_COUNTERS.COUNTER, GUMS_COUNTERS.CARDBOARD];

export { GumsLogsNames, GumsSettingsNames, GUMS_STORAGE_NAME, GUMS_COUNTERS, gumsCountersList };
