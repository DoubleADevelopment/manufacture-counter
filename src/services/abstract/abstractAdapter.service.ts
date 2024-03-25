//types
import type {
  IData,
  IItemDataToDisplay,
  IPackage,
  ItemsDataToDisplayListType,
  IItemData,
  ILogs,
  ISettings,
  IAbstractAdapterService,
} from '../../types';

abstract class AbstractAdapterService<
  P extends IPackage<I>,
  D extends IData<I>,
  I extends IItemData<L, S>,
  L extends ILogs,
  S extends ISettings,
> implements IAbstractAdapterService<P, D, I, L, S>
{
  adaptDataToApp(data: P): D {
    const adaptedData: Record<string, I> = {};

    data.items.forEach((item: I) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData as D;
  }

  adaptDataToView(data: D): I[] {
    const itemsArray: I[] = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }

  adaptItemDataToDisplay(item: I): IItemDataToDisplay {
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

  adaptItemsDataToDisplayList(data: D): ItemsDataToDisplayListType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToDisplay(item);
    });
    return adaptedData;
  }
}

export default AbstractAdapterService;
