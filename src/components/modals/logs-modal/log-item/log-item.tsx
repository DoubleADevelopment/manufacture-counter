//variables
import { CounterText } from '../../../../variables';
//types
import type { ILogItem } from '../../../../types';
//styles
import style from './log-item.module.scss';

interface ILogsItemProps {
  item: ILogItem;
}

const LogItem = ({ item }: ILogsItemProps): JSX.Element => {
  const { name, lastChange, log } = item;

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const transformDate = lastChange
    ? new Intl.DateTimeFormat('pl-PL', options).format(new Date(lastChange))
    : null;

  return (
    <article className={style['log-item']}>
      <header className={style['log-item__header']}>
        <h4 className="heading-x-small content-primary-a">{name}</h4>
        <div className={style['log-item__last-change']}>
          <h5 className="label-x-small content-secondary-a">{CounterText.LASST_CHANGE_TITLE}</h5>

          <p className="paragraph-x-small content-secondary-a">{transformDate}</p>
        </div>
      </header>
      <ul className={`${style['log-item__list']}`}>
        {log.length ? (
          log.map((item, i) => (
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
