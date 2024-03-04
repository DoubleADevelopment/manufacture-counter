//types
import type { IButtonProps } from '../../../types';
//styles
import style from './delete-button.module.scss';

const DeleteButton = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['delete-button']} label-small`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default DeleteButton;
