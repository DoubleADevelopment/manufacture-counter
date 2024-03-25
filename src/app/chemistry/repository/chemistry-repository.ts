//services
import { AbstractRepository } from '../../../repository';
import { adapterService } from '../../../services';
//data
import chemistryData from '../data/chemistry-data';
//types
import type { IData } from '../../../types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables';

const adaptedData: IData = adapterService.adaptDataToApp(chemistryData);

class ChemistryRepositroy extends AbstractRepository {}

const chemistryRepository = new ChemistryRepositroy(adaptedData, CHEMISTRY_STORAGE_NAME);

export default chemistryRepository;
