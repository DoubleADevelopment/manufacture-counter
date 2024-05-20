import { useEffect, useState } from 'react';
//types
import type { IButtonProps } from '../../../types/';
//components
import { NotificationStatic } from '../..';
import { ConfirmDeletingModal } from '../../modals';
//variables
import { NotificationType, SuccessText } from '../../../variables';
//styles
import style from './button-delete-with-confirm.module.scss';

interface IButtonDeleteWithConfirmProps extends IButtonProps {
  modalTitle: string;
}

const ButtonDeleteWithConfirm = ({
  text,
  clickHandler,
  modalTitle,
}: IButtonDeleteWithConfirmProps): JSX.Element => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const onDeleteClickHandler = () => {
    clickHandler();
    setIsConfirmModalOpen(false);
    setShowNotification(true);
  };

  const openConfirmDeletingModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmDeletingModal = () => {
    setIsConfirmModalOpen(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showNotification === true) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <>
      <button
        type="button"
        className={`${style['button-delete-with-confirm']} unselectable label-small content-primary-b`}
        onClick={openConfirmDeletingModal}
      >
        {text}
      </button>

      {/* notification only for successfully deleting  */}
      <NotificationStatic
        type={NotificationType.POSITIVE}
        headingText={SuccessText.SUCCESS}
        paragraphText={SuccessText.SUCCESSFULLY_DELETED}
        show={showNotification}
      />

      {isConfirmModalOpen && (
        <ConfirmDeletingModal
          modalTitle={modalTitle}
          onCancelButtonClickHandler={closeConfirmDeletingModal}
          confirmButtonClickHandler={onDeleteClickHandler}
        />
      )}
    </>
  );
};

export default ButtonDeleteWithConfirm;
