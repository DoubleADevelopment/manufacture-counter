//types
import type { storageNamesAliasType } from '../../../types';
import type { IChemistryData } from '../types/data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/';
//abstract
import { AbstractLocalstorageService } from '../../../services/';

class ChemistryLocalstorageService extends AbstractLocalstorageService<IChemistryData> {
  constructor(storageName: storageNamesAliasType) {
    super(storageName);
  }
}

const chemistryLocalstorageService = new ChemistryLocalstorageService(CHEMISTRY_STORAGE_NAME);

export default chemistryLocalstorageService;
