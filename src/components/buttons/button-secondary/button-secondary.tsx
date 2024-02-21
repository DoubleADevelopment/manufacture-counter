//types
import type { IButtonProps } from '../../../types/other-types';
//styles
import style from './button-secondary.module.scss';

const ButtonSecondary = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-secondary']} label-large`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
