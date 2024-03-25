//services
import { AbstractDataService, adapterService } from '../../../services';
//types
import type { IData } from '../../../types';
//data
import pigmentsData from '../data/pigments-data';

const adaptedData: IData = adapterService.adaptDataToApp(pigmentsData);

class PigmentsDataService extends AbstractDataService {}

const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
