//abstract
import { AbstractRepository } from '../../../repository';
//services
import chemistryDataService from '../services/chemistry-data.service';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables';

class ChemistryRepositroy extends AbstractRepository {}

const chemistryRepository = new ChemistryRepositroy(chemistryDataService, CHEMISTRY_STORAGE_NAME);

export default chemistryRepository;
