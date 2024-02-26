import type { IAdapterService } from '../../../types';
import { IGumsDataItemType, IGumsDataPackageType, IGumsData } from '../types/data-types';

class GumsAdapterService implements IAdapterService<IGumsData, IGumsDataPackageType> {
  adaptDataToApp(data: IGumsDataPackageType): IGumsData {
    const adaptedData: IGumsData = {};

    data.items.forEach((item: IGumsDataItemType) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }
}

const gumsAdapterService = new GumsAdapterService();

export default gumsAdapterService;
