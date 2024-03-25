//abstract
import { AbstractAdapterService } from '../../../services';
//types
import type {
  IPigmentsItem,
  IPigmentsPackage,
  IPigmentsData,
  IPigmentsLogs,
  IPigmentsSettings,
} from '../types/data-type';

class PigmentsAdapterService extends AbstractAdapterService<
  IPigmentsPackage,
  IPigmentsData,
  IPigmentsItem,
  IPigmentsLogs,
  IPigmentsSettings
> {}

const pigmentsAdapterService = new PigmentsAdapterService();

export default pigmentsAdapterService;
