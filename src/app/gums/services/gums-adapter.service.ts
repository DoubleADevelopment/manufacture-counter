import type { IAdapterService } from '../../../types';
import { IGumsDataItemType, IGumsDataPackageType, IGumsDataType } from '../types/data-types';

class GumsAdapterService implements IAdapterService<IGumsDataType, IGumsDataPackageType> {
  adaptDataToStore(data: IGumsDataPackageType): IGumsDataType {
    const adaptedData: IGumsDataType = {};

    data.items.forEach((item: IGumsDataItemType) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }
}

const gumsAdapterService = new GumsAdapterService();

export default gumsAdapterService;
