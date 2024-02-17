//variables
import { NotificationType } from '../../variables';
//styles
import style from './notification-static.module.scss';

interface INotificationProps {
  type: NotificationType;
  headingText: string;
  paragraphText: string;
}

const NotificationStatic = ({
  headingText,
  paragraphText,
  type,
}: INotificationProps): JSX.Element => {
  return (
    <div className={`${style['notification-static']} ${style['notification-static--' + type]}`}>
      <h4 className="label-medium content-primary-a">{headingText}</h4>
      <p className="paragraph-medium content-primary-a">{paragraphText}</p>
    </div>
  );
};

export default NotificationStatic;
