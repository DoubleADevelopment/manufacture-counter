import { useEffect, useRef, useState } from 'react';
//utils
import { extractNumbers, onEnterClickHandlerToElementBlur } from '../../../utils/utils';
//variables
import { InputStatuses } from '../../../variables';
//styles
import style from './control-set-value.module.scss';

interface IControlSetValueProps {
  onInputChangeHandler: (value: number | null) => void;
  value: number | null;
  title: string;
  status: InputStatuses;
  message?: string;
}

const ControlSetValue = ({
  onInputChangeHandler,
  value,
  message,
  status,
  title,
}: IControlSetValueProps): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [inputClassName, setInputClassName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = extractNumbers(event.target.value.trim());

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
      default:
        setInputClassName('');
        break;
    }
  }, [status]);

  return (
    <div className={style['control-set-value']}>
      <label
        className={`${style['control-set-value__label']} unselectable label-large content-primary-a`}
      >
        {message ? (
          <span className={style['control-set-value__message']}>{message}</span>
        ) : (
          <>{title}</>
        )}
        <input
          className={`${style['control-set-value__input']} ${inputClassName} content-primary-a`}
          type="number"
          ref={inputEl}
          value={value !== null ? value : ''}
          onInput={handleInputChange}
          onKeyDown={onInputKeydownListener}
        />
      </label>
    </div>
  );
};

export default ControlSetValue;
