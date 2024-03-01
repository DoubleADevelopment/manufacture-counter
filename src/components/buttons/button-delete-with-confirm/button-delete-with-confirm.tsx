//types
import type { IButtonProps } from '../../../types/';
//styles
import style from './button-delete-with-confirm.module.scss';

const ButtonDeleteWithConfirm = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-delete-with-confirm']} label-small`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonDeleteWithConfirm;
