//types
import AbstractAdapterService from '../../../services/abstract/abstractAdapter.service';
// import type {
//   IData,
//   IItemData,
//   IItemDataToDisplay,
//   ILogs,
//   IPackage,
//   ISettings,
//   ItemsDataToDisplayListType,
// } from '../../../types';
import type {
  IChemistryItem,
  IChemistryData,
  IChemistryPackage,
  IChemistryLogs,
  IChemistrySettings,
} from '../types/data-types';

class ChemistryAdapterService extends AbstractAdapterService<
  IChemistryPackage,
  IChemistryData,
  IChemistryItem,
  IChemistryLogs,
  IChemistrySettings
> {}

// class ChemistryAdapterService {
//   adaptDataToApp(data: IChemistryPackage): IChemistryData {
//     const adaptedData: IChemistryData = {};

//     data.items.forEach((item: IChemistryItem) => {
//       adaptedData[item.UNID] = item;
//     });
//     return adaptedData;
//   }

//   adaptDataToView(data: IChemistryData): ChemistryItemsListType {
//     const itemsArray: ChemistryItemsListType = [];

//     for (const item in data) {
//       itemsArray.push(data[item]);
//     }

//     return itemsArray;
//   }

//   adaptItemDataToDisplay(item: IChemistryItem): IItemDataToDisplay {
//     return {
//       UNID: item.UNID,
//       manufactured: item.manufactured,
//       productName: item.productName,
//       systemCode: item.systemCode,
//       description: item.description,
//       additionalInfo: item.additionalInfo,
//       image: item.image,
//       amount: item.amount,
//       unitsOfMeasurement: item.unitsOfMeasurement,
//       logs: item.logs,
//       color: item.color,
//     };
//   }

//   adaptItemsDataToDisplayList(data: IChemistryData): ItemsDataToDisplayListType {
//     const dataAdaptedToView = this.adaptDataToView(data);
//     const adaptedData = dataAdaptedToView.map((item) => {
//       return this.adaptItemDataToDisplay(item);
//     });
//     return adaptedData;
//   }
// }

const chemistryAdapterService = new ChemistryAdapterService();

export default chemistryAdapterService;
