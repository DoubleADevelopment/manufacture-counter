//abstract
import { AbstractRepository } from '../../../repository';
//services
import gumsDataService from '../services/gums-data.service';
import gumsLocalstorageService from '../services/gums-localstorage.service';
//types
import type { IGumsData, IGumsItem } from '../types/data-types';

class GumsRepositroy extends AbstractRepository<IGumsItem, IGumsData> {}

const gumsRepository = new GumsRepositroy(gumsDataService, gumsLocalstorageService);

export default gumsRepository;
