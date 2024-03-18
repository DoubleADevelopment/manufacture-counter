//types
import type { IButtonProps } from '../../../types';
//styles
import style from './button-tertiary.module.scss';

const ButtonTertiary = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-tertiary']} unselectable label-large content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonTertiary;
