import { useEffect, useRef, useState } from 'react';
//utils
import { extractNumbers, onEnterClickHandlerToElementBlur } from '../../../utils/utils';
//variables
import { InputMessagesText, InputStatuses } from '../../../variables';
//styles
import style from './control-set-additional-value.module.scss';

interface IControlSetAdditionalValueProps {
  onInputChangeHandler: (value: number | null) => void;
  value: number | null;
  titleBefore: string;
  titleAfter?: string;
  status: InputStatuses;
  message: InputMessagesText;
}

const ControlSetAdditionalValue = ({
  titleBefore,
  titleAfter,
  value,
  onInputChangeHandler,
  status,
  message,
}: IControlSetAdditionalValueProps): JSX.Element => {
  console.log(value);
  const inputEl = useRef<HTMLInputElement>(null);
  const [inputClassName, setInputClassName] = useState<string>('');

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
        setInputClassName(style['control-set-value-additional__input--error']);
        break;
      default:
        setInputClassName('');
        break;
    }
  }, [status]);

  return (
    <div className={style['control-set-value-additional']}>
      <label
        className={`${style['control-set-value-additional__label']} unselectable content-primary-a label-medium`}
      >
        {titleBefore}
        <input
          className={`${style['control-set-value-additional__input']} ${inputClassName} content-primary-a label-large`}
          type="number"
          ref={inputEl}
          value={value !== null ? value : ''}
          onInput={handleInputChange}
          onKeyDown={onInputKeydownListener}
        />
        {titleAfter}
      </label>
      {message && (
        <div className={`${style['control-set-value-additional__message']} label-large`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ControlSetAdditionalValue;
