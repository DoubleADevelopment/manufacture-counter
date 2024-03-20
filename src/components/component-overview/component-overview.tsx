//styles
import style from './component-overview.module.scss';
//types
import type { ILogs, ItemsDataToDisplayListType } from '../../types';
import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon, LogsIcon } from '../../icons';
import { LogItem } from '..';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
  title: string;
}

const ComponentOverview = ({ data, title }: IComponentOverviewProps): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);
  const [showLogs, setShowLogs] = useState<boolean>(false);

  const onShowListButtonClickHandler = () => {
    setShowList((prev) => !prev);
  };

  const onShowLogsButtonClickHandler = () => {
    setShowLogs((prev) => !prev);
  };

  const onCloseListButtonClickHandler = () => {
    setShowList(false);
  };

  const generateLogs = (logs: ILogs): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logs) {
      logsArray.push(<LogItem item={logs[key]} key={key} />);
    }
    return logsArray;
  };

  return (
    <section className={style['component-overview']}>
      <header className={style['component-overview__header']}>
        <h2
          className={`${style['component-overview__title']} unselectable content-primary-a heading-medium`}
          onClick={onShowListButtonClickHandler}
        >
          {title}
        </h2>
        <button
          className={style['component-overview__show-button']}
          onClick={onShowListButtonClickHandler}
          type="button"
        >
          {showList ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </button>
      </header>

      {showList && (
        <ul className={style['component-overview__list']}>
          {data.map((item) => {
            return (
              <li className={style['overview-list-item']} key={item.UNID}>
                <div className={style['overview-list-item__info-block']}>
                  <h3 className="content-primary-a heading-x-small">{item.productName}</h3>
                  <p
                    className={`${style['overview-list-item__amount']} content-primary-a label-large`}
                  >
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
                <button
                  className={`${style['component-overview__log-button']} ${style['component-overview__show-button--full']}`}
                  type="button"
                  onClick={onShowLogsButtonClickHandler}
                >
                  Otwóz logi
                  <LogsIcon />
                </button>
                {showLogs && (
                  <div className={style['overview-list-item__logs']}>{generateLogs(item.logs)}</div>
                )}
              </li>
            );
          })}

          <button
            className={`${style['component-overview__show-button']} ${style['component-overview__show-button--full']}`}
            onClick={onCloseListButtonClickHandler}
            type="button"
          >
            <ArrowUpIcon />
          </button>
        </ul>
      )}
    </section>
  );
};

export default ComponentOverview;
