//abstract
import { AbstractDataService } from '../../../services';
//types
import { IData } from '../../../types';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';

const adaptedData: IData = gumsAdapterService.adaptDataToApp(gumsData);

class GumsDataService extends AbstractDataService {}

const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
