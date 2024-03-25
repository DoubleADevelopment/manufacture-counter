//abstract
import { AbstractDataService } from '../../../services';
//types
import type { IData } from '../../../types';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';

const adaptedData: IData = pigmentsAdapterService.adaptDataToApp(pigmentsData);

class PigmentsDataService extends AbstractDataService {}

const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
