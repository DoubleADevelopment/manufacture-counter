//variablse
import { ChemistryPackagesNames } from '../variables/';
//types
import type { IAdapterService, IItemCardData, ItemsCardListDataType } from '../../../types';
import type {
  IChemistryItem,
  IChemistryData,
  ChemistryPackagesListType,
  ChemistryItemsListType,
  IChemistryItems,
} from '../types/data-types';

class ChemistryAdapterService
  implements IAdapterService<IChemistryData, ChemistryPackagesListType>
{
  adaptDataToApp(data: ChemistryPackagesListType): IChemistryData {
    const adaptedData: IChemistryData = {
      [ChemistryPackagesNames.EXTRUSION]: {},
      [ChemistryPackagesNames.VENEER]: {},
    };

    for (const dataPackage of data) {
      dataPackage.items.forEach((item: IChemistryItem) => {
        adaptedData[dataPackage.dataPackageName][item.UNID] = item;
      });
    }
    return adaptedData;
  }

  adaptDataToView(data: IChemistryItems): ChemistryItemsListType {
    const itemsArray: ChemistryItemsListType = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }

  adaptItemDataToCard(item: IChemistryItem): IItemCardData {
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

  adaptItemsToCardList(data: IChemistryItems): ItemsCardListDataType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToCard(item);
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
