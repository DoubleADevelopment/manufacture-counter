import { useEffect, useState } from 'react';
//components
import { ButtonPrimary, ButtonSecondary, ControlSetValueAdditional, ControlSetValue } from '../../';
//utils
import { inputValueValidate } from '../../../utils/utils';
//variables
import { CounterText, InputMessagesText, InputStatuses } from '../../../variables';
//style
import style from './items-counter.module.scss';

interface IItemsCounterProps {
  inc: (value: number, quantity: number) => void;
  dec: (value: number, quantity: number) => void;
  onValueChangeHandler: (value: number) => void;
  defaultValue: number;
  defaultQuantity?: number;
  text: {
    quantityTitle: string;
    valueTitleBefore: string;
    valueTitleAfter: string;
  };
}

const ItemsCounter = ({
  inc,
  dec,
  onValueChangeHandler,
  defaultValue,
  text,
  defaultQuantity,
}: IItemsCounterProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(defaultValue);
  const [quantity, setQuantity] = useState<number | null>(defaultQuantity ? defaultQuantity : 1);
  const [valueMessage, setValueMessage] = useState<InputMessagesText>(InputMessagesText.DEFAULT);
  const [valueStatus, setValueStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);
  const [quantityMessage, setQuantityMessage] = useState<InputMessagesText>(
    InputMessagesText.DEFAULT,
  );
  const [quantityStatus, setQuantityStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  useEffect(() => {
    if (!!value && value !== 0) onValueChangeHandler(value);
  }, [value]);

  const plusClickHandler = () => {
    const validateResult = inputValueValidate(quantity);
    if (validateResult.status === InputStatuses.SUCCESS && value !== null && quantity !== null) {
      inc(value, quantity);
    }
  };

  const minusClickHandler = () => {
    const validateResult = inputValueValidate(quantity);
    if (validateResult.status === InputStatuses.SUCCESS && value !== null && quantity !== null) {
      dec(value, quantity);
    }
  };

  const valueHandler = (value: number | null): void => {
    setValue(value);
    const validateValueResult = inputValueValidate(value);
    setValueStatus(validateValueResult.status);
    setValueMessage(validateValueResult.message);
  };

  const quantityHandler = (quantity: number | null) => {
    setQuantity(quantity);
    const validateQuantityResult = inputValueValidate(quantity);
    setQuantityStatus(validateQuantityResult.status);
    setQuantityMessage(validateQuantityResult.message);
  };

  return (
    <div className={style['items-counter']}>
      <ControlSetValueAdditional
        value={value}
        titleBefore={text.valueTitleBefore}
        titleAfter={text.valueTitleAfter}
        onInputChangeHandler={valueHandler}
        status={valueStatus}
        message={valueMessage}
      />
      <ControlSetValue
        onInputChangeHandler={quantityHandler}
        value={quantity}
        status={quantityStatus}
        message={quantityMessage}
        title={text.quantityTitle}
      />
      <div className={style['items-counter__buttons']}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </div>
  );
};

export default ItemsCounter;
