import { useState } from 'react';
//components
import LogItem from '../../log-item/log-item';
import { ButtonWithIcon } from '../../buttons';
//types
import type { ICounters, IItemDataToDisplay } from '../../../types';
//styles
import style from './overview-list-item.module.scss';
//icons
import { LogsIcon } from '../../../icons';

interface IOverviewListItemProps {
  item: IItemDataToDisplay;
}

const OverviewListItem = ({ item }: IOverviewListItemProps): JSX.Element => {
  const { productName, image, amount, unitsOfMeasurement, description, color } = item;

  const [showLogs, setShowLogs] = useState<boolean>(false);

  const onShowLogsButtonClickHandler = () => {
    setShowLogs((prev) => !prev);
  };

  const generateLogs = (logs: ICounters): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logs) {
      logsArray.push(<LogItem counter={logs[key]} key={key} />);
    }
    return logsArray;
  };

  return (
    <li
      className={style['overview-list-item']}
      key={item.UNID}
      style={{ borderBottomColor: color }}
    >
      <h3 className={`${style['overview-list-item__title']} content-primary-a label-large`}>
        {productName}
      </h3>

      <img
        className={`${style['overview-list-item__image']}`}
        src={image}
        alt=""
        width={100}
        height={100}
      />
      {description && (
        <p className={`${style['overview-list-item__description']}`}>{description}</p>
      )}

      <p className={`${style['overview-list-item__amount']} content-primary-a heading-medium`}>
        {amount}
        <span className="paragraph-small">{unitsOfMeasurement}</span>
      </p>

      <ButtonWithIcon
        text={showLogs ? 'ukryj logi' : 'pokaz logi'}
        showText={true}
        fullWidth={true}
        clickHandler={onShowLogsButtonClickHandler}
      >
        {<LogsIcon />}
      </ButtonWithIcon>

      <div
        className={`${style['overview-list-item__logs']} ${showLogs && style['overview-list-item__logs--open']}`}
      >
        <div className={style['overview-list-item__logs-wrap']}>{generateLogs(item.counters)}</div>
      </div>
    </li>
  );
};

export default OverviewListItem;
