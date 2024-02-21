enum CounterText {
  PLUS = 'Dodać',
  MINUS = 'Odjąć',
  CHEMISTRY_SET_VALUE_TITLE = 'Ilość',
  CLEAR_COUNTER_DATA = 'Usuń danę licznika',
  NO_LOGS = 'Brak logów',
}

enum CounterInputErrorsText {
  EMPTY_FIELD = 'Nic nie wpisanę w pole!',
  DIVISION_BY_ZERO = 'Nie można dodać/odjąć ZERO!',
  DEFAULT = '',
}

enum ErrorsText {
  COMPONENT_NOT_FOUND = 'Nie znaleziono komponentu do przeliczenia.',
}

enum UnitsOfMeasurementText {
  KG = 'Kg',
  AMOUNT = 'Ilość',
  BAGS = 'vorki',
}

enum InterfaceTest {
  CLOSE_MODAL = 'Zamknąć okno',
}

export { CounterText, UnitsOfMeasurementText, CounterInputErrorsText, ErrorsText, InterfaceTest };
