import { useEffect, useState } from 'react';
//components
import { ButtonPrimary, ButtonSecondary, ControlSetItemsAmount, ControlSetValue } from '../../';
//variables
import { CounterInputErrorsText, CounterText, InputStatuses } from '../../../variables';
//style
import style from './items-counter.module.scss';

interface IItemsCounterProps {
  inc: (value: number) => void;
  dec: (value: number) => void;
  onValueChangeHandler: (value: number) => void;
  defaultValue: number;
}

const ItemsCounter = ({
  inc,
  dec,
  onValueChangeHandler,
  defaultValue,
}: IItemsCounterProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(defaultValue);
  const [amountValue, setAmountValue] = useState<number | null>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);
  const [amountStatus, setAmountStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(InputStatuses.DEFAULT);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  useEffect(() => {
    if (!!value && value !== 0) onValueChangeHandler(value);
  }, [value]);

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
    if (validateResult === true && value !== null && amountValue !== null) {
      inc(value * amountValue);
    }
  };

  const minusClickHandler = () => {
    const validateResult = validateInputData(value);
    if (validateResult === true && value !== null && amountValue !== null) {
      dec(value * amountValue);
    }
  };

  const amountHandler = (value: number | null) => {
    setAmountValue(value);
    if (value === 0) {
      setAmountStatus(InputStatuses.ERROR);
    } else {
      setAmountStatus(InputStatuses.DEFAULT);
    }
  };

  return (
    <div className={style['items-counter']}>
      <ControlSetItemsAmount
        value={amountValue}
        titleBefore="jedno kliknięcie + "
        titleAfter="karton"
        onInputChangeHandler={amountHandler}
        status={amountStatus}
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
