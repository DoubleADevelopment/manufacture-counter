//types
import type { IGumsData } from '../types/data-types';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';
//abstract
import { AbstractDataService } from '../../../services';

const adaptedData: IGumsData = gumsAdapterService.adaptDataToApp(gumsData);

class GumsDataService extends AbstractDataService<IGumsData> {
  constructor(data: IGumsData) {
    super(data);
  }
}
const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
