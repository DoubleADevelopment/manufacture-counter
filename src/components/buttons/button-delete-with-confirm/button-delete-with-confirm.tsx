//types
import { useState } from 'react';
import type { IButtonProps } from '../../../types/';
//styles
import style from './button-delete-with-confirm.module.scss';

const ButtonDeleteWithConfirm = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);

  const onDeleteButtonClickHandler = () => {
    setConfirmModalIsOpen(true);
  };

  const confirmButtonClickHandler = () => {
    clickHandler();
  };

  const onCancelButtonClickHandler = () => {
    setConfirmModalIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`${style['button-delete-with-confirm']} unselectable label-small content-primary-b`}
        onClick={onDeleteButtonClickHandler}
      >
        {text}
      </button>

      {confirmModalIsOpen && (
        <div className={style['button-delete-with-confirm__modal']}>
          <div className={style['button-delete-with-confirm__modal-content']}>
            <h4>Clear your chat history - are you sure?</h4>
            <button
              onClick={onCancelButtonClickHandler}
              className={style['button-delete-with-confirm__cancel-btn']}
              type="button"
            >
              anulować
            </button>
            <button
              onClick={confirmButtonClickHandler}
              type="button"
              className={`${style['button-delete-with-confirm']} unselectable label-small content-primary-b`}
            >
              Potwierdź usunięcie
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonDeleteWithConfirm;
