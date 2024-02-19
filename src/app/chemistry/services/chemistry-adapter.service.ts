import type { IAdapterService } from '../../../types';
import type { ItemsListDataType, IItemCardData } from '../../../types/data-types';
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

  adaptItemDataToCard(item: IChemistryDataItemType): IItemCardData {
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

  adaptDataToItemsList(data: IChemistryDataType): ItemsListDataType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToCard(item);
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
