//services
import { AbstractRepository } from '../../../repository';
//data
import gumsData from '../data/gums-data';
//variables
import { GUMS_STORAGE_NAME } from '../variables';

class GumsRepositroy extends AbstractRepository {}

const gumsRepository = new GumsRepositroy(gumsData, GUMS_STORAGE_NAME);

export default gumsRepository;
