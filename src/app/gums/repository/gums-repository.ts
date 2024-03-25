//services
import { AbstractRepository } from '../../../repository';
//data
import gumsData from '../data/gums-data';

class GumsRepositroy extends AbstractRepository {}

const gumsRepository = new GumsRepositroy(gumsData);

export default gumsRepository;
