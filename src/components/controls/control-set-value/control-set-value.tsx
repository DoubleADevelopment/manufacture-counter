import { useRef, useState } from 'react';
//styles
import style from './control-set-value.module.scss';
import { onEnterClickHandler } from '../../../utils/utils';

const ControlSetValue = (): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<number | string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim();
    setInputValue(newValue);
  };

  const onInputKeydownListener = (evt: any) => {
    onEnterClickHandler(evt, inputEl.current);
  };

  return (
    <div className={style['control-set-value']}>
      <label className={`${style['control-set-value__label']} label-large`}>
        Dodać
        {/* <span className={style['control-set-value__message']}>{message ? message : null}</span> */}
        <input
          className={style['control-set-value__input']}
          type="number"
          ref={inputEl}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={onInputKeydownListener}
        />
      </label>
    </div>
  );
};

export default ControlSetValue;
