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
  const [quantity, setQuantity] = useState<number | null>(1);
  const [valueMessage, setValueMessage] = useState<InputMessagesText>(InputMessagesText.DEFAULT);
  const [valueStatus, setValueStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);
  const [quantityMessage, setQuantityMessage] = useState<InputMessagesText>(
    InputMessagesText.DEFAULT,
  );
  const [quantityStatus, setQuantityStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValueStatus(InputStatuses.DEFAULT);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [valueStatus]);

  useEffect(() => {
    if (!!value && value !== 0) onValueChangeHandler(value);
  }, [value]);

  const plusClickHandler = () => {
    const validateResult = inputValueValidate(quantity);
    if (validateResult.status === InputStatuses.SUCCESS && value !== null && quantity !== null) {
      inc(value * quantity);
    }
  };

  const minusClickHandler = () => {
    const validateResult = inputValueValidate(quantity);
    if (validateResult.status === InputStatuses.SUCCESS && value !== null && quantity !== null) {
      dec(value * quantity);
    }
  };

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
    if (value === 0) {
      setValueStatus(InputStatuses.ERROR);
      setValueMessage(InputMessagesText.DIVISION_BY_ZERO);
    } else {
      setValueMessage(InputMessagesText.DEFAULT);
    }
  };

  const quantityHandler = (value: number | null) => {
    setQuantity(value);

    if (value === 0) {
      setQuantityStatus(InputStatuses.ERROR);
      setQuantityMessage(InputMessagesText.DIVISION_BY_ZERO);
    } else {
      setQuantityStatus(InputStatuses.DEFAULT);
      setQuantityMessage(InputMessagesText.DEFAULT);
    }
  };

  return (
    <div className={style['items-counter']}>
      <ControlSetValueAdditional
        value={value}
        titleBefore="jeden karton = "
        titleAfter="kg"
        onInputChangeHandler={onInputValueChangeHandler}
        status={valueStatus}
        message={valueMessage}
      />
      <ControlSetValue
        onInputChangeHandler={quantityHandler}
        value={quantity}
        status={quantityStatus}
        message={quantityMessage}
        title="Ilość"
      />
      <div className={style['items-counter__buttons']}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </div>
  );
};

export default ItemsCounter;
