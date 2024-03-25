//services
import { AbstractRepository } from '../../../repository';
//data
import chemistryData from '../data/chemistry-data';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables';

class ChemistryRepositroy extends AbstractRepository {}

const chemistryRepository = new ChemistryRepositroy(chemistryData, CHEMISTRY_STORAGE_NAME);

export default chemistryRepository;
