import { ChangeEvent } from 'react';
//styles
import style from './switcher.module.scss';

interface ISwitcherProps {
  onChangeListener: (value: boolean) => void;
  text?: string;
}

const Switcher = ({ onChangeListener, text }: ISwitcherProps) => {
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
      />
    </label>
  );
};

export default Switcher;
