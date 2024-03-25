//services
import { AbstractRepository } from '../../../repository';
//data
import pigmentsData from '../data/pigments-data';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables';

class PigmentsRepositroy extends AbstractRepository {}

const pigmentsRepository = new PigmentsRepositroy(pigmentsData, PIGMENTS_STORAGE_NAME);

export default pigmentsRepository;
