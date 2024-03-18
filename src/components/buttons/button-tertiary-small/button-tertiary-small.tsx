//types
import type { IButtonProps } from '../../../types';
//styles
import style from './button-tertiary-small.module.scss';

const ButtonTertiarySmall = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-tertiary-samll']} unselectable label-small content-primary-a`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonTertiarySmall;
