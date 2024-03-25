//abstract
import { AbstractDataService } from '../../../services';
//types
import type { IPigmentsData, IPigmentsItem } from '../types/data-type';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';

const adaptedData: IPigmentsData = pigmentsAdapterService.adaptDataToApp(pigmentsData);

class PigmentsDataService extends AbstractDataService<IPigmentsItem, IPigmentsData> {}

const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
