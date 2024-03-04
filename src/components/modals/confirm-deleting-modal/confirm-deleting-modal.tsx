//layouts
import { ButtonDeleteSmall, ButtonTertiarySmall } from '../..';
import { ModalLayout } from '../../../layouts';
//variables
import { InterfaceText } from '../../../variables';
//styles
import style from './confirm-deleting-modal.module.scss';

interface IConfirmDeletingModalProps {
  onCancelButtonClickHandler: () => void;
  confirmButtonClickHandler: () => void;
  modalTitle: string;
}

const ConfirmDeletingModal = ({
  onCancelButtonClickHandler,
  confirmButtonClickHandler,
  modalTitle,
}: IConfirmDeletingModalProps): JSX.Element => {
  return (
    <ModalLayout onOverlayClickHandler={onCancelButtonClickHandler}>
      <section className={style['confirm-deleting-modal']}>
        <h3 className="content-primary-a heading-small">{modalTitle}</h3>
        <ButtonTertiarySmall
          clickHandler={onCancelButtonClickHandler}
          text={InterfaceText.CANCEL_DELETING}
        />
        <ButtonDeleteSmall
          clickHandler={confirmButtonClickHandler}
          text={InterfaceText.CONFIRM_DELETING}
        />
      </section>
    </ModalLayout>
  );
};

export default ConfirmDeletingModal;
