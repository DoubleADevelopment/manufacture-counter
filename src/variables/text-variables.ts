const CounterText = {
  PLUS: 'Dodać',
  MINUS: 'Odjąć',
  CHEMISTRY_SET_VALUE_TITLE: 'Ilość',
  CLEAR_COUNTER_DATA: 'Usuń danę licznika',
  NO_LOGS: 'Brak logów',
  COUNTER_LOGS: 'Logi licznika',
  CHEMISTRY_COUNTER_TITLE: 'Licznik chemii',
  CHEMISTRY_COUNTER_VENEER: 'Okleina',
  CHEMISTRY_COUNTER_EXTRUSION: 'Ekstruzja',
  GUMS_COUNTER_TITLE: 'Licznik gumy',
  CLEAR_COUNTER_HISTORY_CONFIRM: 'Napewno chcesz usunąć danę licznika?',
  OPEN_COUNTER: 'Otwórz licznik',
  QUANTITY_COUNTER_TITLE: 'Ilość',
  ONE_CARDBOARD_VALUE_IS: 'jeden karton = ',
  GUMS_BASIC_COUNTER_INPUT_TEXT: 'Ilość gumy w kg',
  CHEMISTRY_BASIC_COUNTER_INPUT_TEXT: 'Ilość chemii w szt',
  PIGMENTS_BASIC_COUNTER_INPUT_TEXT: 'Ilość pigmentu w kg',
  PIGMENTS_BAGS_COUNTER_TITLE: 'Ilość vorków',
  PIGMENTS_BAG_VALUE_IS: 'Waga jednego worku',
};

// Failed to open counter called

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
  FAILED_OPEN_COUNTER_CALLED_COUNTERNAME = 'Nie udało się otworzyć licznik o nazwie - ',
}

enum UnitsOfMeasurementText {
  KG = 'Kg',
  AMOUNT = 'Ilość',
  BAGS = 'vorki',
}

const InterfaceText = {
  CLOSE_MODAL: 'Zamknąć okno',
  BACK_TO_OVERVIEW: 'Powrót do przeglądu',
  CANCEL_DELETING: 'Anulować',
  CONFIRM_DELETING: 'Potwierdź usunięcie',
};

export { CounterText, UnitsOfMeasurementText, ErrorsText, InterfaceText, InputMessagesText };
