//types
import type { IPigmentsData } from '../types/data-type';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';
//abstract
import { AbstractDataService } from '../../../services';

const adaptedData: IPigmentsData = pigmentsAdapterService.adaptDataToApp(pigmentsData);

class PigmentsDataService extends AbstractDataService<IPigmentsData> {
  constructor(data: IPigmentsData) {
    super(data);
  }
}
const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
