//types
import type { IButtonProps } from '../../../types/';
//styles
import style from './button-primary.module.scss';

const ButtonPrimary = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-primary']} label-large content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
