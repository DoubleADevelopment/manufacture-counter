//styles
import { ErrorIcon, InfoIcon, PositiveIcon, WarningIcon } from '../../../icons';
import { NotificationType } from '../../../variables';
import style from './page-notification.module.scss';

interface INotificationProps {
  type: NotificationType;
  headingText: string;
  paragraphText: string;
}

const PageNotification = ({
  type,
  headingText,
  paragraphText,
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
    <section className={style['page-notification']}>
      {NotificationIcon}
      <div className={style['page-notification__content']}>
        <h4 className="heading-x-small content-primary-a">{headingText}</h4>
        <p className="paragraph-medium content-primary-a">{paragraphText}</p>
      </div>
    </section>
  );
};

export default PageNotification;
