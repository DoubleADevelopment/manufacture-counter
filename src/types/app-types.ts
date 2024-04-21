type overviewPanelStatusType = 'open' | 'close';

interface IAppState {
  overviewPanelStatus: overviewPanelStatusType;
}

export type { overviewPanelStatusType, IAppState };
