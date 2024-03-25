//services
import { AbstractRepository } from '../../../repository';
import { adapterService } from '../../../services';
//data
import pigmentsData from '../data/pigments-data';
//types
import type { IData } from '../../../types';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables';

const adaptedData: IData = adapterService.adaptDataToApp(pigmentsData);

class PigmentsRepositroy extends AbstractRepository {}

const pigmentsRepository = new PigmentsRepositroy(adaptedData, PIGMENTS_STORAGE_NAME);

export default pigmentsRepository;
