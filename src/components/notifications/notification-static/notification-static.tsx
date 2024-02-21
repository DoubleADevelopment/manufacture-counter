//variables
import { NotificationType } from '../../../variables';
//icons
import { ErrorIcon, InfoIcon, WarningIcon, PositiveIcon } from '../../../icons';
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
  const NotificationIcon = ((): JSX.Element => {
    switch (type) {
      case NotificationType.ERROR:
        return <ErrorIcon />;
      case NotificationType.INFO:
        return <InfoIcon />;
      case NotificationType.WARNING:
        return <WarningIcon />;
      case NotificationType.POSITIVE:
        return <PositiveIcon />;
      default:
        const exhaustiveCheck: never = type;
        throw new Error(`Unhandled notification type: ${exhaustiveCheck}`);
    }
  })();

  return (
    <div className={`${style['notification-static']} ${style['notification-static--' + type]}`}>
      <span className={style['notification-static__icon']}>{NotificationIcon}</span>
      <h4 className="label-medium content-primary-a">{headingText}</h4>
      <p className="paragraph-medium content-primary-a">{paragraphText}</p>
    </div>
  );
};

export default NotificationStatic;
