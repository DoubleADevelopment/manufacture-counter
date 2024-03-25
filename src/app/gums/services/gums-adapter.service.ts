//abstract
import { AbstractAdapterService } from '../../../services';
//types
import type {
  IGumsItem,
  IGumsPackage,
  IGumsData,
  IGumsLogs,
  IGumsSettings,
} from '../types/data-types';

class GumsAdapterService extends AbstractAdapterService<
  IGumsPackage,
  IGumsData,
  IGumsItem,
  IGumsLogs,
  IGumsSettings
> {}

const gumsAdapterService = new GumsAdapterService();

export default gumsAdapterService;
