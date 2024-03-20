//styles
import { IButtonProps } from '../../../types';
import style from './button-with-icon.module.scss';

interface IButtonWithIconProps extends IButtonProps {
  children: JSX.Element;
  showText?: boolean;
  fullWidth?: boolean;
}

const ButtonWithIcon = ({
  children,
  text,
  clickHandler,
  showText,
  fullWidth,
}: IButtonWithIconProps): JSX.Element => {
  return (
    <button
      className={`${style['button-with-icon']} ${fullWidth && style['button-with-icon--full']}`}
      type="button"
      onClick={clickHandler}
    >
      {showText ? <span>{text}</span> : <span className="visually-hidden">{text}</span>}

      {children}
    </button>
  );
};

export default ButtonWithIcon;
