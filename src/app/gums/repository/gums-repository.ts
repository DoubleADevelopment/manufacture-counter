//abstract
import { AbstractRepository } from '../../../repository';
//services
import gumsDataService from '../services/gums-data.service';
//variables
import { GUMS_STORAGE_NAME } from '../variables';

class GumsRepositroy extends AbstractRepository {}

const gumsRepository = new GumsRepositroy(gumsDataService, GUMS_STORAGE_NAME);

export default gumsRepository;
