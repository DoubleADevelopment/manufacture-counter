//types
import type { overviewPanelStatusType, RootState } from '../types';

const SelectorGetOverviewPanelStatus =
  () =>
  (state: RootState): overviewPanelStatusType => {
    return state.app.overviewPanelStatus;
  };

export { SelectorGetOverviewPanelStatus };
