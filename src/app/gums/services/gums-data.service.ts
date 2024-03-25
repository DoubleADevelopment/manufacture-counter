//abstract
import { AbstractDataService } from '../../../services';
//types
import type { IGumsData, IGumsItem } from '../types/';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';

const adaptedData: IGumsData = gumsAdapterService.adaptDataToApp(gumsData);

class GumsDataService extends AbstractDataService<IGumsItem, IGumsData> {}

const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
