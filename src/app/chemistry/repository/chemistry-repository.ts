//services
import { AbstractRepository } from '../../../repository';
//data
import chemistryData from '../data/chemistry-data';

class ChemistryRepositroy extends AbstractRepository {}

const chemistryRepository = new ChemistryRepositroy(chemistryData);

export default chemistryRepository;
