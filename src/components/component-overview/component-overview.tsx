import { useEffect, useState } from 'react';
//components
import OverviewBody from './overview-body/overview-body';
//styles
import style from './component-overview.module.scss';
//types
import type {
  IOverviewRefreshStatusKey,
  ItemsDataToDisplayListType,
  overviewPanelStatusType,
} from '../../types';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
  title: string;
  isOpen: overviewPanelStatusType;
  refreshStatushKey: IOverviewRefreshStatusKey;
  setItemShowStatus: (status: overviewPanelStatusType, packageName: string) => void;
}

const ComponentOverview = ({
  data,
  title,
  isOpen,
  refreshStatushKey,
  setItemShowStatus,
}: IComponentOverviewProps): JSX.Element => {
  const [showList, setShowList] = useState<overviewPanelStatusType>(isOpen);

  const onShowListButtonClickHandler = () => {
    setShowList((prev) => (prev === 'close' ? 'open' : 'close'));
  };

  const onCloseListButtonClickHandler = () => {
    setShowList('close');
  };

  useEffect(() => {
    setShowList(refreshStatushKey.key);
  }, [refreshStatushKey]);

  useEffect(() => {
    setItemShowStatus(showList, title);
  }, [showList]);

  return (
    <section className={style['component-overview']}>
      <OverviewBody
        data={data}
        onShowListButtonClickHandler={onShowListButtonClickHandler}
        onCloseListButtonClickHandler={onCloseListButtonClickHandler}
        showList={showList}
        title={title}
      />
    </section>
  );
};

export default ComponentOverview;
