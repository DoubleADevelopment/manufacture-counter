//types
import type { IAdapterService } from '../../../types';
import type { ItemsListDataType, IItemCardData } from '../../../types/data-types';
import type {
  ChemistryDataForViewType,
  IChemistryDataItem,
  ChemistryDataPackagesType,
  IChemistryData,
  IChemistryDataPackage,
} from '../types/data-types';
//variables
import { ChemistryPackagesNames } from '../variables/data-variables';

class ChemistryAdapterService
  implements IAdapterService<IChemistryData, ChemistryDataPackagesType>
{
  adaptDataToApp(data: ChemistryDataPackagesType): IChemistryData {
    const adaptedData: IChemistryData = {
      [ChemistryPackagesNames.EKSTRUZJA]: {},
      [ChemistryPackagesNames.OKLEINA]: {},
    };

    data.map((dataPackage: IChemistryDataPackage) => {
      dataPackage.items.forEach((item: IChemistryDataItem) => {
        return (adaptedData[dataPackage.dataPackageName][item.UNID] = item);
      });
    });
    return adaptedData;
  }

  adaptDataToView(
    data: IChemistryData,
    packageName: ChemistryPackagesNames,
  ): ChemistryDataForViewType {
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

  adaptDataToItemsList(
    data: IChemistryData,
    packageName: ChemistryPackagesNames,
  ): ItemsListDataType {
    const dataAdaptedToView = this.adaptDataToView(data, packageName);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToCard(item);
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
