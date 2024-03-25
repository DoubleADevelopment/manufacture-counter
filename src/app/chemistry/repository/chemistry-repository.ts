//abstract
import { AbstractRepository } from '../../../repository';
//services
import chemistryDataService from '../services/chemistry-data.service';
import chemistryLocalstorageService from '../services/chemistry-localstorage.service';
//types
import type { IChemistryData, IChemistryItem } from '../types/';

class ChemistryRepositroy extends AbstractRepository<IChemistryItem, IChemistryData> {}

const chemistryRepository = new ChemistryRepositroy(
  chemistryDataService,
  chemistryLocalstorageService,
);

export default chemistryRepository;
