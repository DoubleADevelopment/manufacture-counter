//styles
import style from './button-secondary.module.scss';

interface IButtonPrimaryProps {
  text: string;
  clickHandler: () => void;
}

const ButtonSecondary = ({ text, clickHandler }: IButtonPrimaryProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-secondary']} paragraph-large content-primary-b`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
