//services
import { AbstractRepository } from '../../../repository';
//data
import suppliesData from '../data/supplies-data';

class SuppliesRepositroy extends AbstractRepository {}

const suppliesRepository = new SuppliesRepositroy(suppliesData);

export default suppliesRepository;
