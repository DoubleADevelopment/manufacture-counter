//types
import { useState } from 'react';
import type { IButtonProps } from '../../../types/';
//styles
import style from './button-delete-with-confirm.module.scss';
import { ConfirmDeletingModal } from '../../modals';

interface IButtonDeleteWithConfirmProps extends IButtonProps {
  modalTitle: string;
}

const ButtonDeleteWithConfirm = ({
  text,
  clickHandler,
  modalTitle,
}: IButtonDeleteWithConfirmProps): JSX.Element => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const onDeleteClickHandler = () => {
    clickHandler();
    setIsConfirmModalOpen(false);
  };

  const openConfirmDeletingModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmDeletingModal = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`${style['button-delete-with-confirm']} unselectable label-small content-primary-b`}
        onClick={openConfirmDeletingModal}
      >
        {text}
      </button>

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
