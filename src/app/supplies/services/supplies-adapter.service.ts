//abstract
import { AbstractAdapterService } from '../../../services';
//types
import type {
  ISuppliesItem,
  ISuppliesPackage,
  ISuppliesData,
  ISuppliesLogs,
  ISuppliesSettings,
} from '../types/data-types';

class SuppliesAdapterService extends AbstractAdapterService<
  ISuppliesPackage,
  ISuppliesData,
  ISuppliesItem,
  ISuppliesLogs,
  ISuppliesSettings
> {}

const suppliesAdapterService = new SuppliesAdapterService();

export default suppliesAdapterService;
