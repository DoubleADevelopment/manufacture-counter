//abstract
import { AbstractRepository } from '../../../repository';
//services
import chemistryDataService from '../services/chemistry-data.service';
import chemistryLocalstorageService from '../services/chemistry-localstorage.service';

class ChemistryRepositroy extends AbstractRepository {}

const chemistryRepository = new ChemistryRepositroy(
  chemistryDataService,
  chemistryLocalstorageService,
);

export default chemistryRepository;
