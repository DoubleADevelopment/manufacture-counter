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
  const { productName, image, amount, unitsOfMeasurement, description } = item;

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
      <h3 className={`${style['overview-list-item__title']} content-primary-a heading-x-small  `}>
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

      {showLogs && (
        <div className={style['overview-list-item__logs']}>{generateLogs(item.logs)}</div>
      )}
    </li>
  );
};

export default OverviewListItem;
