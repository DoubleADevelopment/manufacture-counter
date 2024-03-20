//styles
import { IButtonProps } from '../../../types';
import style from './button-with-icon.module.scss';

interface IButtonWithIconProps extends IButtonProps {
  children: JSX.Element;
}

const ButtonWithIcon = ({ children, text, clickHandler }: IButtonWithIconProps): JSX.Element => {
  return (
    <button className={style['button-with-icon']} type="button" onClick={clickHandler}>
      <span className="visually-hidden">{text}</span>
      {children}
    </button>
  );
};

export default ButtonWithIcon;
