//types
import type { IButtonProps } from '../../../types/other-types';
//styles
import style from './button-secondary-small.module.scss';

const ButtonSecondarySmall = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-secondary-small']} label-small`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonSecondarySmall;
