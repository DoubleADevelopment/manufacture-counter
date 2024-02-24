//types
import type { IAdapterService } from '../../../types';
import type { ItemsListDataType, IItemCardData } from '../../../types/data-types';
import type {
  ChemistryDataForViewType,
  IChemistryDataItem,
  ChemistryDataPackagesType,
  IChemistryData,
} from '../types/data-types';

class ChemistryAdapterService
  implements IAdapterService<IChemistryData, ChemistryDataPackagesType>
{
  adaptDataToApp(data: ChemistryDataPackagesType): IChemistryData {
    const adaptedData: IChemistryData = {};

    for (const dataPackage of data) {
      adaptedData[dataPackage.dataPackageName] = {};
      dataPackage.items.forEach((item: IChemistryDataItem) => {
        adaptedData[dataPackage.dataPackageName][item.UNID] = item;
      });
    }
    return adaptedData;
  }

  adaptDataToView(data: IChemistryData, packageName: string): ChemistryDataForViewType {
    const itemsArray: ChemistryDataForViewType = [];

    for (const item in data[packageName]) {
      itemsArray.push(data[packageName][item]);
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

  adaptDataToItemsList(data: IChemistryData, packageName: string): ItemsListDataType {
    const dataAdaptedToView = this.adaptDataToView(data, packageName);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToCard(item);
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
