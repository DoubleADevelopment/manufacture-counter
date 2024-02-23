enum CounterText {
  PLUS = 'Dodać',
  MINUS = 'Odjąć',
  CHEMISTRY_SET_VALUE_TITLE = 'Ilość',
  CLEAR_COUNTER_DATA = 'Usuń danę licznika',
  NO_LOGS = 'Brak logów',
  CHEMISTRY_COUNTER_TITLE = 'Licznik chemii',
}

enum CounterInputErrorsText {
  EMPTY_FIELD = 'Nic nie wpisanę w pole!',
  DIVISION_BY_ZERO = 'Nie można dodać/odjąć ZERO!',
  DEFAULT = '',
}

enum ErrorsText {
  COMPONENT_NOT_FOUND = 'Nie znaleziono komponentu do przeliczenia.',
  COUNTER_OPENING_ERROR = 'Błąd przy otwarciu licznika',
}

enum UnitsOfMeasurementText {
  KG = 'Kg',
  AMOUNT = 'Ilość',
  BAGS = 'vorki',
}

enum InterfaceText {
  CLOSE_MODAL = 'Zamknąć okno',
  BACK_TO_OVERVIEW = 'Powrót do przeglądu',
}

export { CounterText, UnitsOfMeasurementText, CounterInputErrorsText, ErrorsText, InterfaceText };
