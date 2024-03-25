//abstract
import { AbstractRepository } from '../../../repository';
//services
import PigmentsDataService from '../services/pigments-data.service';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables';

class PigmentsRepositroy extends AbstractRepository {}

const pigmentsRepository = new PigmentsRepositroy(PigmentsDataService, PIGMENTS_STORAGE_NAME);

export default pigmentsRepository;
