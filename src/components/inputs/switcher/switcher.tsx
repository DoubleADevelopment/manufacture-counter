import { ChangeEvent } from 'react';
//styles
import style from './switcher.module.scss';

interface ISwitcherProps {
  onChangeListener: (value: boolean) => void;
  checked: boolean;
  text?: string;
}

const Switcher = ({ onChangeListener, text, checked }: ISwitcherProps) => {
  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const switcherStatus: boolean = evt.target.checked;
    onChangeListener(switcherStatus);
  };

  return (
    <label className={style.switcher}>
      {text && <span className="content-secondary-a label-x-small">{text}</span>}

      <input
        className={style.switcher__input}
        type="checkbox"
        name="overview-status"
        id=""
        onChange={onChangeHandler}
        checked={checked}
      />
    </label>
  );
};

export default Switcher;
