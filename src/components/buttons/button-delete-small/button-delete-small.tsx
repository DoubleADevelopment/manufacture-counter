//types
import type { IButtonProps } from '../../../types';
//styles
import style from './button-delete-small.module.scss';

const ButtonDeleteSmall = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-delete-small']} label-small content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonDeleteSmall;
