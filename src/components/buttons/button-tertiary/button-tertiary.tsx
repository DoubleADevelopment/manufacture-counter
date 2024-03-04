//types
import type { IButtonProps } from '../../../types';
//styles
import style from './button-tertiary.module.scss';

const ButtonTertiary = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-tertiary']} label-large`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonTertiary;
