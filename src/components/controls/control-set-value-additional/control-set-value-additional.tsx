import { useEffect, useState } from 'react';
//utils
import { extractNumbers } from '../../../utils/utils';
//variables
import { InputMessagesText, InputStatuses } from '../../../variables';
//styles
import style from './control-set-value-additional.module.scss';

interface IControlSetValueAdditionalProps {
  onInputChangeHandler: (value: number | null) => void;
  value: number | null;
  titleBefore: string;
  titleAfter?: string;
  status?: InputStatuses;
  message?: InputMessagesText;
}

const ControlSetValueAdditional = ({
  titleBefore,
  titleAfter,
  value,
  onInputChangeHandler,
  status,
  message,
}: IControlSetValueAdditionalProps): JSX.Element => {
  const [inputClassName, setInputClassName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = extractNumbers(event.target.value.trim());

    if (newValue === '') {
      onInputChangeHandler(null);
    } else {
      onInputChangeHandler(parseFloat(newValue) || 0);
    }
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
        className={`${style['control-set-value-additional__label']} content-primary-a label-medium`}
      >
        {titleBefore}
        <input
          className={`${style['control-set-value-additional__input']} ${inputClassName} content-primary-a label-large`}
          type="number"
          value={value !== null ? value : ''}
          onChange={handleInputChange}
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

export default ControlSetValueAdditional;
