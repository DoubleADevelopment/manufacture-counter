import type { IAdapterService } from '../../../types';
import { IPigmentsDataItemType, IPigmentsDataPackageType, IPigmentsData } from '../types/data-type';

class PigmentsAdapterService implements IAdapterService<IPigmentsData, IPigmentsDataPackageType> {
  adaptDataToApp(data: IPigmentsDataPackageType): IPigmentsData {
    const adaptedData: IPigmentsData = {};

    data.items.forEach((item: IPigmentsDataItemType) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }
}

const pigmentsAdapterService = new PigmentsAdapterService();

export default pigmentsAdapterService;
