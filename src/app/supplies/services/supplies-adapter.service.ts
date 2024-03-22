//types
import type { IItemDataToDisplay, ItemsDataToDisplayListType } from '../../../types';
import type {
  ISuppliesItem,
  ISuppliesPackage,
  ISuppliesData,
  SuppliesItemsListType,
} from '../types/data-types';

class SuppliesAdapterService {
  adaptDataToApp(data: ISuppliesPackage): ISuppliesData {
    const adaptedData: ISuppliesData = {};

    data.items.forEach((item: ISuppliesItem) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }

  adaptDataToView(data: ISuppliesData): SuppliesItemsListType {
    const itemsArray: SuppliesItemsListType = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }

  adaptItemDataToDisplay(item: ISuppliesItem): IItemDataToDisplay {
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
      logs: item.logs,
      color: item.color,
    };
  }

  adaptItemsDataToDisplayList(data: ISuppliesData): ItemsDataToDisplayListType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToDisplay(item);
    });
    return adaptedData;
  }
}

const suppliesAdapterService = new SuppliesAdapterService();

export default suppliesAdapterService;
