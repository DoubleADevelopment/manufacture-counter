//variables
import { CounterText } from '../../variables';
//types
import { ICounter } from '../../types/data-types';
//styles
import style from './log-item.module.scss';
import { formatDateToShortFormat } from '../../utils/utils';

interface ILogsItemProps {
  counter: ICounter;
}

const LogItem = ({ counter }: ILogsItemProps): JSX.Element => {
  const { logs, lastChange, counterLogTitle } = counter;

  return (
    <article className={style['log-item']}>
      <header className={style['log-item__header']}>
        <h4 className="heading-x-small content-primary-a">{counterLogTitle}</h4>

        {lastChange && (
          <div className={style['log-item__last-change']}>
            <h5 className="label-x-small content-secondary-a">{CounterText.LASST_CHANGE_TITLE}</h5>
            <time
              className="paragraph-x-small content-secondary-a"
              dateTime={lastChange.toString()}
            >
              {formatDateToShortFormat(lastChange)}
            </time>
          </div>
        )}
      </header>
      <ul className={`${style['log-item__list']}`}>
        {logs.length ? (
          logs.map((item, i) => (
            <li className={`${style['log-item__item']} content-primary-a paragraph-medium`} key={i}>
              {item}
            </li>
          ))
        ) : (
          <p className="content-primary-a paragraph-medium">{CounterText.NO_LOGS}</p>
        )}
      </ul>
    </article>
  );
};

export default LogItem;
