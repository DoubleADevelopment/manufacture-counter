enum GumsLogsNames {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum GumsSettingsNames {
  BASE_CARDBOARD_VALUE = 'baseCardboardValue',
  BASE_COUNTER_VALUE = 'baseCounterValue',
}

enum GUMS_COUNTERS {
  COUNTER = 'Licznik',
  CARDBOARD = 'Kartony',
}

const gumsCountersList: GUMS_COUNTERS[] = [GUMS_COUNTERS.COUNTER, GUMS_COUNTERS.CARDBOARD];

export { GumsLogsNames, GumsSettingsNames, GUMS_COUNTERS, gumsCountersList };
