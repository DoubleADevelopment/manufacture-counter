import type { IAdapterService } from '../../../types';
import type { IItemCardData } from '../../../types/data-types';
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

  adaptItemToShort(item: IChemistryDataItemType): IItemCardData {
    return {
      UNID: item.UNID,
      name: item.name,
      description: item.description,
      itemNumber: item.itemNumber,
      packagingInfo: item.packagingInfo,
      image: item.image,
      amount: item.amount,
    };
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
