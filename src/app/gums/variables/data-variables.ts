enum GumsLogsNames {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum GumsSettingsNames {
  BASE_CARDBOARD_VALUE = 'baseCardboardValue',
}

const GUMS_STORAGE_NAME = 'gums-data';

enum GUMS_COUNTERS {
  COUNTER = 'counter',
  CARDBOARD = 'cardboard',
}

enum GUMS_COUNTERS_NAMES {
  COUNTER = 'licznik',
  CARDBOARD = 'kartony',
}

interface IGumsCounter {
  logname: GumsLogsNames;
  counterName: GUMS_COUNTERS_NAMES;
}

interface IGumscounters {
  [GUMS_COUNTERS.CARDBOARD]: IGumsCounter;
  [GUMS_COUNTERS.COUNTER]: IGumsCounter;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gumscounters: IGumscounters = {
  [GUMS_COUNTERS.CARDBOARD]: {
    logname: GumsLogsNames.CARDBOARD,
    counterName: GUMS_COUNTERS_NAMES.CARDBOARD,
  },
  [GUMS_COUNTERS.COUNTER]: {
    logname: GumsLogsNames.COUNTER,
    counterName: GUMS_COUNTERS_NAMES.COUNTER,
  },
};

const gumsCountersList: GUMS_COUNTERS[] = [GUMS_COUNTERS.COUNTER, GUMS_COUNTERS.CARDBOARD];

export type { IGumscounters };
export {
  GumsLogsNames,
  GumsSettingsNames,
  GUMS_STORAGE_NAME,
  GUMS_COUNTERS,
  gumsCountersList,
  gumscounters,
};
