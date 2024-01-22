import type { IAdapterService } from '../../../types';
import {
  IChemistryDataItemType,
  IChemistryDataPackageType,
  IChemistryDataType,
} from '../types/data-types';

class ChemistryAdapterService
  implements IAdapterService<IChemistryDataType, IChemistryDataPackageType>
{
  adaptDataToApp(data: IChemistryDataPackageType): IChemistryDataType {
    const adaptedData: IChemistryDataType = {};

    data.items.forEach((item: IChemistryDataItemType) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
