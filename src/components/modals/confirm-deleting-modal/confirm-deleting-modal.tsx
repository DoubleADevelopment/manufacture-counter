//layouts
import { ModalLayout } from '../../../layouts';
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
    <ModalLayout onOverlayClickHandler={onCancelButtonClickHandler}>
      <section className={style['confirm-deleting-modal']}>
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
      </section>
    </ModalLayout>
  );
};

export default ConfirmDeletingModal;
