//services
import { AbstractRepository } from '../../../repository';
import { adapterService } from '../../../services';
//data
import gumsData from '../data/gums-data';
//types
import { IData } from '../../../types';
//variables
import { GUMS_STORAGE_NAME } from '../variables';

const adaptedData: IData = adapterService.adaptDataToApp(gumsData);

class GumsRepositroy extends AbstractRepository {}

const gumsRepository = new GumsRepositroy(adaptedData, GUMS_STORAGE_NAME);

export default gumsRepository;
