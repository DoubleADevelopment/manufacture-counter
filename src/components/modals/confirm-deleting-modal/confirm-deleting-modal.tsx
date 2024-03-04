//styles
import style from './confirm-deleting-modal.module.scss';

interface IConfirmDeletingModalProps {
  onCancelButtonClickHandler: () => void;
  confirmButtonClickHandler: () => void;
}

const ConfirmDeletingModal = ({
  onCancelButtonClickHandler,
  confirmButtonClickHandler,
}: IConfirmDeletingModalProps): JSX.Element => {
  return (
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
          className={`${style['button-delete-with-confirm']} label-small`}
        >
          Potwierdź usunięcie
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeletingModal;
