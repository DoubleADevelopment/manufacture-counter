//types
import type { IItemDataToDisplay, ItemsDataToDisplayListType } from '../../../types';
import type {
  IPigmentsItem,
  IPigmentsPackage,
  IPigmentsData,
  PigmentsItemsListType,
} from '../types/data-type';

class PigmentsAdapterService {
  adaptDataToApp(data: IPigmentsPackage): IPigmentsData {
    const adaptedData: IPigmentsData = {};

    data.items.forEach((item: IPigmentsItem) => {
      adaptedData[item.UNID] = item;
    });
    return adaptedData;
  }

  adaptDataToView(data: IPigmentsData): PigmentsItemsListType {
    const itemsArray: PigmentsItemsListType = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  }

  adaptItemDataToDisplay(item: IPigmentsItem): IItemDataToDisplay {
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

  adaptItemsDataToDisplayList(data: IPigmentsData): ItemsDataToDisplayListType {
    const dataAdaptedToView = this.adaptDataToView(data);
    const adaptedData = dataAdaptedToView.map((item) => {
      return this.adaptItemDataToDisplay(item);
    });
    return adaptedData;
  }
}

const pigmentsAdapterService = new PigmentsAdapterService();

export default pigmentsAdapterService;
