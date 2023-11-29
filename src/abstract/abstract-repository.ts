//abstract
import AbstractDataService from './abstract-data.service';
import AbstractLocalstorageService from './abstract-localstorage.service';

class AbstractRepository {
  #dataService: AbstractDataService;
  #localstorageService: AbstractLocalstorageService;

  constructor(dataService: AbstractDataService, localstorageService: AbstractLocalstorageService) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }
}

export default AbstractRepository;
