//types
import type { LocalstorageNamesType } from '../../../types';
import type { IChemistryData } from '../types/data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/';
//abstract
import { AbstractLocalstorageService } from '../../../services/';

class ChemistryLocalstorageService extends AbstractLocalstorageService<IChemistryData> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const chemistryLocalstorageService = new ChemistryLocalstorageService(CHEMISTRY_STORAGE_NAME);

export default chemistryLocalstorageService;
