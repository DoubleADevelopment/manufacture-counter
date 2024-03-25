//services
import { AbstractRepository } from '../../../repository';
//data
import pigmentsData from '../data/pigments-data';

class PigmentsRepositroy extends AbstractRepository {}

const pigmentsRepository = new PigmentsRepositroy(pigmentsData);

export default pigmentsRepository;
