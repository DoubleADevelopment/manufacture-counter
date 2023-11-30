//abstract
import {
  AbstractDataService,
  AbstractLocalstorageService,
  AbstractRepository,
} from '../../../abstract';
//services
import chemistryDataService from '../services/chemistry-data.service';
import chemistryLocalstorageService from '../services/chemistry-localstorage.service';
//types
import type { ChemistryDataType } from '../types/chemistry-data-types';

class ChemistryRepositroy extends AbstractRepository<ChemistryDataType> {
  constructor(
    chemistryDataService: AbstractDataService<ChemistryDataType>,
    chemistryLocalstorageService: AbstractLocalstorageService<ChemistryDataType>,
  ) {
    super(chemistryDataService, chemistryLocalstorageService);
  }
}

const chemistryRepository = new ChemistryRepositroy(
  chemistryDataService,
  chemistryLocalstorageService,
);

export default chemistryRepository;
