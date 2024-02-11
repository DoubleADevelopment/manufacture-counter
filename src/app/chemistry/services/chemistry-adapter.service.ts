import type { IAdapterService } from '../../../types';
import {
  ChemistryDataForViewType,
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

  adaptDataToView(data: IChemistryDataType): ChemistryDataForViewType {
    const itemsArray: ChemistryDataForViewType = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
