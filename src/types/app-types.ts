type overviewPanelStatusType = 'open' | 'close';

interface IOverviewRefreshStatusKey {
  key: overviewPanelStatusType;
}

interface IAppState {
  overviewPanelStatus: overviewPanelStatusType;
}

export type { overviewPanelStatusType, IAppState, IOverviewRefreshStatusKey };
