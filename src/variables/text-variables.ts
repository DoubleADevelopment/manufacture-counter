enum CounterText {
  PLUS = 'Dodać',
  MINUS = 'Odjąć',
  CHEMISTRY_SET_VALUE_TITLE = 'Ilość',
  CLEAR_COUNTER_DATA = 'Usuń danę licznika',
  NO_LOGS = 'Brak logów',
  COUNTER_LOGS = 'Logi licznika',
  CHEMISTRY_COUNTER_TITLE = 'Licznik chemii',
  CHEMISTRY_COUNTER_VENEER = 'Okleina',
  CHEMISTRY_COUNTER_EXTRUSION = 'Ekstruzja',
  GUMS_COUNTER_TITLE = 'Licznik gumy',
  CLEAR_COUNTER_HISTORY_CONFIRM = 'Napewno chcesz usunąć danę licznika?',
  OPEN_COUNTER = 'Otwórz licznik',
}

enum CounterInputErrorsText {
  EMPTY_FIELD = 'Nic nie wpisanę w pole!',
  DIVISION_BY_ZERO = 'Nie można dodać/odjąć ZERO!',
  DEFAULT = '',
}

enum InputMessagesText {
  EMPTY_FIELD = 'Nic nie wpisanę w pole!',
  DIVISION_BY_ZERO = 'Nie można dodać/odjąć ZERO!',
  DEFAULT = '',
}

enum ErrorsText {
  COMPONENT_NOT_FOUND = 'Nie znaleziono komponentu do przeliczenia.',
  COUNTER_OPENING_ERROR = 'Błąd przy otwarciu licznika',
  COMPONENT_NOT_FOUND_WITH_UNID = 'Nie znaleziono komponentu o numerze - ',
  SOMETHING_WENT_WRONG = 'uuups... Coś poszło nie tak...',
  ITEMS_LIST_NOT_FOUND = 'Nie udało się nam otworzyć listę komponentów.',
}

enum UnitsOfMeasurementText {
  KG = 'Kg',
  AMOUNT = 'Ilość',
  BAGS = 'vorki',
}

enum InterfaceText {
  CLOSE_MODAL = 'Zamknąć okno',
  BACK_TO_OVERVIEW = 'Powrót do przeglądu',
  CANCEL_DELETING = 'Anulować',
  CONFIRM_DELETING = 'Potwierdź usunięcie',
}

export {
  CounterText,
  UnitsOfMeasurementText,
  CounterInputErrorsText,
  ErrorsText,
  InterfaceText,
  InputMessagesText,
};
