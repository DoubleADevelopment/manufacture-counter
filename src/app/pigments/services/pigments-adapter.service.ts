import type { IAdapterService } from '../../../types';
import {
  IPigmentsDataItemType,
  IPigmentsDataPackageType,
  IPigmentsDataType,
} from '../types/data-type';

class PigmentsAdapterService
  implements IAdapterService<IPigmentsDataType, IPigmentsDataPackageType>
{
  adaptDataToStore(data: IPigmentsDataPackageType): IPigmentsDataType {
    const adaptedData: IPigmentsDataType = {};

    data.items.forEach((item: IPigmentsDataItemType) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }
}

const pigmentsAdapterService = new PigmentsAdapterService();

export default pigmentsAdapterService;
