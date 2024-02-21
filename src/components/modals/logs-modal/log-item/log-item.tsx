//variables
import { CounterText } from '../../../../variables';
//styles
import style from './log-item.module.scss';

interface ILogsItemProps {
  log: string[];
  logName: string;
}

const LogItem = ({ log, logName }: ILogsItemProps): JSX.Element => {
  return (
    <article className={style['log-item']}>
      <h4 className="heading-x-small content-primary-a">{logName} logi</h4>
      <ul className={`${style['log-item__list']}`}>
        {log.length ? (
          log.map((item) => (
            <li className="content-primary-a paragraph-medium" key={item}>
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
