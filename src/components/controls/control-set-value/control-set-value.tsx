import { useEffect, useRef, useState } from 'react';
//variables
import { CounterText, InputStatuses } from '../../../variables';
//styles
import style from './control-set-value.module.scss';
import { onEnterClickHandlerToElementBlur } from '../../../utils/utils';

interface IControlSetValueProps {
  onInputChangeHandler: (value: number | null) => void;
  value: number | null;
  message?: string;
  status?: InputStatuses;
}

const ControlSetValue = ({
  onInputChangeHandler,
  value,
  message,
  status,
}: IControlSetValueProps): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [inputClassName, setInputClassName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim();

    if (newValue === '') {
      onInputChangeHandler(null);
    } else {
      onInputChangeHandler(parseFloat(newValue) || 0);
    }
  };

  const onInputKeydownListener = (evt: any) => {
    onEnterClickHandlerToElementBlur(evt, inputEl.current);
  };

  useEffect(() => {
    switch (status) {
      case InputStatuses.ERROR:
        setInputClassName(style['control-set-value__input--error']);
        break;
      case InputStatuses.SUCCESS:
        setInputClassName(style['control-set-value__input--success']);
        break;
      default:
        setInputClassName('');
        break;
    }
  }, [status]);

  return (
    <div className={style['control-set-value']}>
      <label className={`${style['control-set-value__label']} label-large content-primary-a`}>
        {message ? (
          <span className={style['control-set-value__message']}>{message}</span>
        ) : (
          CounterText.CHEMISTRY_SET_VALUE_TITLE
        )}
        {/* <span className={style['control-set-value__message']}>{message ? message : null}</span> */}
        <input
          className={`${style['control-set-value__input']} ${inputClassName} content-primary-a`}
          type="number"
          ref={inputEl}
          value={value ? value : ''}
          onChange={handleInputChange}
          onKeyDown={onInputKeydownListener}
        />
      </label>
    </div>
  );
};

export default ControlSetValue;
