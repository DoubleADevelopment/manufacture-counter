//abstract
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
//types
import type { LocalstorageNamesType } from '../../../types/localstorage-types';
import type { ChemistryDataType } from '../types/chemistry-data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/data-variables';

class LocalstorageService extends AbstractLocalstorageService<ChemistryDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const localstorageService = new LocalstorageService(CHEMISTRY_STORAGE_NAME);

export default localstorageService;
