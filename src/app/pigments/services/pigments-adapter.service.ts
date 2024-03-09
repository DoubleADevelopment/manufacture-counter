import type { IAdapterService } from '../../../types';
import { IPigmentsItem, IPigmentsPackage, IPigmentsData } from '../types/data-type';

class PigmentsAdapterService implements IAdapterService<IPigmentsData, IPigmentsPackage> {
  adaptDataToApp(data: IPigmentsPackage): IPigmentsData {
    const adaptedData: IPigmentsData = {};

    data.items.forEach((item: IPigmentsItem) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }
}

const pigmentsAdapterService = new PigmentsAdapterService();

export default pigmentsAdapterService;
