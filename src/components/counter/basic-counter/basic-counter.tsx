import { useState } from 'react';
//components
import { ButtonPrimary, ButtonSecondary, ControlSetValue } from '../..';
//utils
import { inputValueValidate } from '../../../utils/utils';
//variables
import { InputMessagesText, CounterText, InputStatuses } from '../../../variables';
//style
import style from './basic-counter.module.scss';

interface IBasicCounterProps {
  inc: (value: number) => void;
  dec: (value: number) => void;
  title: string;
}

const BasicCounter = ({ inc, dec, title }: IBasicCounterProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(500);
  const [message, setMessage] = useState<InputMessagesText>(InputMessagesText.DEFAULT);
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
    const validateQuantityResult = inputValueValidate(value);
    setStatus(validateQuantityResult.status);
    setMessage(validateQuantityResult.message);
  };

  const plusClickHandler = () => {
    const validateResult = inputValueValidate(value);
    if (validateResult.status === InputStatuses.SUCCESS && value !== null) {
      inc(value);
    }
  };

  const minusClickHandler = () => {
    const validateResult = inputValueValidate(value);
    if (validateResult.status === InputStatuses.SUCCESS && value !== null) {
      dec(value);
    }
  };

  return (
    <div className={style['basic-counter']}>
      <ControlSetValue
        onInputChangeHandler={onInputValueChangeHandler}
        value={value}
        status={status}
        message={message}
        title={title}
      />
      <div className={style['basic-counter__buttons']}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </div>
  );
};

export default BasicCounter;
