//types
import { useState } from 'react';
import { LogsIcon } from '../../../icons';
import type { IItemDataToDisplay, ILogs } from '../../../types';
//styles
import style from './overview-list-item.module.scss';
import LogItem from '../../log-item/log-item';
import { ButtonWithIcon } from '../../buttons';

interface IOverviewListItemProps {
  item: IItemDataToDisplay;
}

const OverviewListItem = ({ item }: IOverviewListItemProps): JSX.Element => {
  const [showLogs, setShowLogs] = useState<boolean>(false);

  const onShowLogsButtonClickHandler = () => {
    setShowLogs((prev) => !prev);
  };

  const generateLogs = (logs: ILogs): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logs) {
      logsArray.push(<LogItem item={logs[key]} key={key} />);
    }
    return logsArray;
  };

  return (
    <li className={style['overview-list-item']} key={item.UNID}>
      <div className={style['overview-list-item__info-block']}>
        <h3 className="content-primary-a heading-x-small">{item.productName}</h3>
        <p className={`${style['overview-list-item__amount']} content-primary-a label-large`}>
          {item.amount}
          <span className="paragraph-small ">{item.unitsOfMeasurement}</span>
        </p>
      </div>
      <img
        className={style['overview-list-item__image']}
        src={item.image}
        alt=""
        width={100}
        height={100}
      />
      <ButtonWithIcon text="Otwóz logi" clickHandler={onShowLogsButtonClickHandler}>
        {<LogsIcon />}
      </ButtonWithIcon>
      {showLogs && (
        <div className={style['overview-list-item__logs']}>{generateLogs(item.logs)}</div>
      )}
    </li>
  );
};

export default OverviewListItem;
