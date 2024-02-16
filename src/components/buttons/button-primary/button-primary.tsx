//styles
import style from './button-primary.module.scss';

interface IButtonPrimaryProps {
  text: string;
  clickHandler: () => void;
}

const ButtonPrimary = ({ text, clickHandler }: IButtonPrimaryProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-primary']} paragraph-large content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
