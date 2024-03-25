//abstract
import { AbstractRepository } from '../../../repository';
//services
import PigmentsDataService from '../services/pigments-data.service';
import PigmentsLocalstorageService from '../services/pigments-localstorage.service';
//types
import type { IPigmentsData, IPigmentsItem } from '../types/data-type';

class PigmentsRepositroy extends AbstractRepository<IPigmentsItem, IPigmentsData> {}

const pigmentsRepository = new PigmentsRepositroy(PigmentsDataService, PigmentsLocalstorageService);

export default pigmentsRepository;
