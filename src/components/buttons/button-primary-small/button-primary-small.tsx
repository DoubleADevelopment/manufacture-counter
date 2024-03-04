//types
import type { IButtonProps } from '../../../types/';
//styles
import style from './button-primary-small.module.scss';

const ButtonPrimarySmall = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-primary-small']} label-small content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonPrimarySmall;
