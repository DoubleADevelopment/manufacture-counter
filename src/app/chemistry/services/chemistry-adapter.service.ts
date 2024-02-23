import type { IAdapterService } from '../../../types';
import type { ItemsListDataType, IItemCardData } from '../../../types/data-types';
import {
  ChemistryDataForViewType,
  IChemistryDataItem,
  IChemistryDataPackage,
  IChemistryData,
} from '../types/data-types';

class ChemistryAdapterService implements IAdapterService<IChemistryData, IChemistryDataPackage> {
  adaptDataToApp(data: IChemistryDataPackage): IChemistryData {
    const adaptedData: IChemistryData = {};

    data.items.forEach((item: IChemistryDataItem) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }

  adaptDataToView(data: IChemistryData): ChemistryDataForViewType {
    const itemsArray: ChemistryDataForViewType = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }

  adaptItemDataToCard(item: IChemistryDataItem): IItemCardData {
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

  adaptDataToItemsList(data: IChemistryData): ItemsListDataType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToCard(item);
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
