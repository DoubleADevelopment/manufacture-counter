//types
import type { IButtonProps } from '../../../types';
//styles
import style from './system-secondary-button.module.scss';

const SystemSecondaryButton = ({ clickHandler, text }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['system-secondary-button']} label-small`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default SystemSecondaryButton;
