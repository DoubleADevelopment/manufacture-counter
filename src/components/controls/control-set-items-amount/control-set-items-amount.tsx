//styles
import style from './control-set-items-amount.module.scss';
import { extractNumbers } from '../../../utils/utils';
import { InputStatuses } from '../../../variables';
import { useEffect, useState } from 'react';

interface IControlSetItemsAmountProps {
  onInputChangeHandler: (value: number | null) => void;
  value: number | null;
  titleBefore: string;
  titleAfter?: string;
  status?: InputStatuses;
}

const ControlSetItemsAmount = ({
  titleBefore,
  titleAfter,
  value,
  onInputChangeHandler,
  status,
}: IControlSetItemsAmountProps): JSX.Element => {
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
        setInputClassName(style['control-set-amount__input--error']);
        break;
      default:
        setInputClassName('');
        break;
    }
  }, [status]);

  return (
    <div className={style['control-set-amount']}>
      <label className={`${style['control-set-amount__label']} content-primary-a label-medium`}>
        {titleBefore}
        <input
          className={`${style['control-set-amount__input']} ${inputClassName} content-primary-a label-large`}
          type="number"
          value={value !== null ? value : ''}
          onChange={handleInputChange}
        />
        {titleAfter}
      </label>
    </div>
  );
};

export default ControlSetItemsAmount;
