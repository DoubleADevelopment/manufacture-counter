//abstract
import { AbstractRepository } from '../../../repository';
//services
import gumsDataService from '../services/gums-data.service';
import gumsLocalstorageService from '../services/gums-localstorage.service';

class GumsRepositroy extends AbstractRepository {}

const gumsRepository = new GumsRepositroy(gumsDataService, gumsLocalstorageService);

export default gumsRepository;
