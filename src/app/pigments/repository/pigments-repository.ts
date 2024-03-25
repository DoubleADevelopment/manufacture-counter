//abstract
import { AbstractRepository } from '../../../repository';
//services
import PigmentsDataService from '../services/pigments-data.service';
import PigmentsLocalstorageService from '../services/pigments-localstorage.service';

class PigmentsRepositroy extends AbstractRepository {}

const pigmentsRepository = new PigmentsRepositroy(PigmentsDataService, PigmentsLocalstorageService);

export default pigmentsRepository;
