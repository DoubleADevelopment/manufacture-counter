//variablse
import { ChemistryPackagesNames } from '../variables/';
//types
import type { IItemDataToDisplay, ItemsDataToDisplayListType } from '../../../types';
import type {
  IChemistryItem,
  IChemistryData,
  ChemistryPackagesListType,
  ChemistryItemsListType,
  IChemistryItems,
} from '../types/data-types';

class ChemistryAdapterService {
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

  adaptItemDataToDisplay(item: IChemistryItem): IItemDataToDisplay {
    return {
      UNID: item.UNID,
      manufactured: item.manufactured,
      productName: item.productName,
      systemCode: item.systemCode,
      description: item.description,
      additionalInfo: item.additionalInfo,
      image: item.image,
      amount: item.amount,
      unitsOfMeasurement: item.unitsOfMeasurement,
    };
  }

  adaptItemsDataToDisplayList(data: IChemistryItems): ItemsDataToDisplayListType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToDisplay(item);
    });
    return adaptedData;
  }
}

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
