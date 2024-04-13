//types
import type { IAppState } from '../types';

class AppRepository {
  getState(): IAppState {
    return {
      overviewPanelStatus: 'close',
    };
  }
}

const appRepository = new AppRepository();

export default appRepository;
