//services
import { AbstractDataService, adapterService } from '../../../services';
//types
import { IData } from '../../../types';
//data
import gumsData from '../data/gums-data';

const adaptedData: IData = adapterService.adaptDataToApp(gumsData);

class GumsDataService extends AbstractDataService {}

const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
