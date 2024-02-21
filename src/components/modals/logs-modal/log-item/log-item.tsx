//styles
import style from './log-item.module.scss';

interface ILogsItemProps {
  log: string[];
  logName: string;
}

const LogItem = ({ log, logName }: ILogsItemProps): JSX.Element => {
  return (
    <div className={style['log-item']}>
      <h4 className="heading-x-small content-primary-a">{logName} logi</h4>
      <ul className={`${style['log-item__list']}`}>
        {log.map((item) => (
          <li className="content-primary-a paragraph-medium" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogItem;
