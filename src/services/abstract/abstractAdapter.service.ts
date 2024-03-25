//types
import type {
  IData,
  IItemDataToDisplay,
  IPackage,
  ItemsDataToDisplayListType,
  IItemData,
  IAbstractAdapterService,
} from '../../types';

abstract class AbstractAdapterService implements IAbstractAdapterService {
  adaptDataToApp(data: IPackage): IData {
    const adaptedData: Record<string, IItemData> = {};

    data.items.forEach((item: IItemData) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData as IData;
  }

  adaptDataToView(data: IData): IItemData[] {
    const itemsArray: IItemData[] = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }

  adaptItemDataToDisplay(item: IItemData): IItemDataToDisplay {
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

  adaptItemsDataToDisplayList(data: IData): ItemsDataToDisplayListType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToDisplay(item);
    });
    return adaptedData;
  }
}

export default AbstractAdapterService;
