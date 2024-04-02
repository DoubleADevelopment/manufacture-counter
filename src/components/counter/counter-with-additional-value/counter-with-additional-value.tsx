import { useEffect, useState } from 'react';
//components
import { ButtonPrimary, ButtonSecondary, ControlSetAdditionalValue, ControlSetValue } from '../..';
//utils
import { inputValueValidate } from '../../../utils/utils';
//variables
import { CounterText, InputMessagesText, InputStatuses } from '../../../variables';
//types
import type { ICounter } from '../../../types/data-types';
//style
import style from './counter-with-additional-value.module.scss';

interface ICounterWithAdditionalValueProps {
  inc: (value: number, additionalValue: number) => void;
  dec: (value: number, additionalValue: number) => void;
  onAdditionalValueChangeHandler: (value: number) => void;
  counter: ICounter;
}

const CounterWithAdditionalValue = ({
  inc,
  dec,
  onAdditionalValueChangeHandler,
  counter,
}: ICounterWithAdditionalValueProps): JSX.Element => {
  //main value state
  const [value, setValue] = useState<number | null>(counter.counterBaseValue);
  const [valueMessage, setValueMessage] = useState<InputMessagesText>(InputMessagesText.DEFAULT);
  const [valueStatus, setValueStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);
  //addtitional value state
  const [additionalValue, setAdditionalValue] = useState<number | null>(
    counter.counterAdditionalValue,
  );
  const [additionalValueMessage, setAdditionalValueMessage] = useState<InputMessagesText>(
    InputMessagesText.DEFAULT,
  );
  const [additionalValueStatus, setAdditionalValueStatus] = useState<InputStatuses>(
    InputStatuses.DEFAULT,
  );

  useEffect(() => {
    setValue(counter.counterBaseValue);
    setAdditionalValue(counter.counterAdditionalValue);
  }, [counter]);

  useEffect(() => {
    if (!!additionalValue && additionalValue !== 0) onAdditionalValueChangeHandler(additionalValue);
  }, [additionalValue]);

  const plusClickHandler = () => {
    const validateResult = inputValueValidate(value);
    if (
      validateResult.status === InputStatuses.SUCCESS &&
      additionalValue !== null &&
      value !== null
    ) {
      inc(value, additionalValue);
    }
  };

  const minusClickHandler = () => {
    const validateResult = inputValueValidate(value);
    if (
      validateResult.status === InputStatuses.SUCCESS &&
      additionalValue !== null &&
      value !== null
    ) {
      dec(value, additionalValue);
    }
  };

  const additionalValueHandler = (newAdditionalValue: number | null): void => {
    const validateAdditionalValueResult = inputValueValidate(newAdditionalValue);
    setAdditionalValue(newAdditionalValue);
    setAdditionalValueStatus(validateAdditionalValueResult.status);
    setAdditionalValueMessage(validateAdditionalValueResult.message);
  };

  const valueHandler = (newValue: number | null) => {
    const validateQuantityResult = inputValueValidate(newValue);
    setValue(newValue);
    setValueStatus(validateQuantityResult.status);
    setValueMessage(validateQuantityResult.message);
  };

  return (
    <div className={style['items-counter']}>
      <ControlSetAdditionalValue
        value={additionalValue}
        titleBefore={counter.counterAdditionalValueTitle}
        onInputChangeHandler={additionalValueHandler}
        status={additionalValueStatus}
        message={additionalValueMessage}
      />

      <ControlSetValue
        onInputChangeHandler={valueHandler}
        value={value}
        status={valueStatus}
        message={valueMessage}
        title={counter.counterBaseValueTitle}
      />

      <div className={style['items-counter__buttons']}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </div>
  );
};

export default CounterWithAdditionalValue;
