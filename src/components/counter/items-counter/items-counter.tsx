import { ChangeEvent, useEffect, useState } from 'react';
//components
import { ButtonPrimary, ButtonSecondary, ControlSetItemsAmount, ControlSetValue } from '../../';
//variables
import { CounterInputErrorsText, CounterText, InputStatuses } from '../../../variables';
//style
import style from './items-counter.module.scss';

interface IItemsCounterProps {
  inc: (value: number) => void;
  dec: (value: number) => void;
}

const ItemsCounter = ({ inc, dec }: IItemsCounterProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(500);
  const [amountValue, setAmountValue] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(InputStatuses.DEFAULT);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  const validateInputData = (value: number | null): boolean => {
    if (value === null) {
      setStatus(InputStatuses.ERROR);
      setMessage(CounterInputErrorsText.EMPTY_FIELD);
      return false;
    } else if (value === 0) {
      setStatus(InputStatuses.ERROR);
      setMessage(CounterInputErrorsText.DIVISION_BY_ZERO);
      return false;
    } else {
      setStatus(InputStatuses.SUCCESS);
      setMessage(CounterInputErrorsText.DEFAULT);
      return true;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
    if (value === 0) {
      setStatus(InputStatuses.ERROR);
      setMessage(CounterInputErrorsText.DIVISION_BY_ZERO);
    } else {
      setMessage(CounterInputErrorsText.DEFAULT);
    }
  };

  const plusClickHandler = () => {
    const validateResult = validateInputData(value);
    if (validateResult === true && value !== null) {
      inc(value);
    }
  };

  const minusClickHandler = () => {
    const validateResult = validateInputData(value);
    if (validateResult === true && value !== null) {
      dec(value);
    }
  };

  const amountHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setAmountValue(+evt.target.value);
    console.log(evt.target.value);
  };

  return (
    <div className={style['items-counter']}>
      <ControlSetItemsAmount
        value={amountValue}
        title="jedno kliknięcie + "
        onInputChangeHandler={amountHandler}
      />
      <ControlSetValue
        onInputChangeHandler={onInputValueChangeHandler}
        value={value}
        status={status}
        message={message}
      />
      <div className={style['items-counter__buttons']}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </div>
  );
};

export default ItemsCounter;
