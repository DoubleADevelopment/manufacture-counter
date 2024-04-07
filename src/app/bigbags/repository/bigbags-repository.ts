//services
import { AbstractRepository } from '../../../repository';
//data
import gumsData from '../data/bigbags-data';

class BigBagsRepositroy extends AbstractRepository {}

const bigbagsRepository = new BigBagsRepositroy(gumsData);

export default bigbagsRepository;
