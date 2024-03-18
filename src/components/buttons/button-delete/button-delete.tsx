//types
import type { IButtonProps } from '../../../types';
//styles
import style from './button-delete.module.scss';

const ButtonDelete = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-delete']} unselectable label-large content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonDelete;
