import { useState, useEffect } from 'react';
//components
import {
  ItemCardShort,
  ControlSetValue,
  ButtonPrimary,
  ButtonSecondary,
} from '../../../../components';
//store
import { useAppDispatch } from '../../../../hooks/hooks';
import { incrementAction, decrementAction } from '../../store/actions/actions';
//variables
import { InputStatuses, CounterText, CounterInputErrorsText } from '../../../../variables';
//types
import type { IItemCardData } from '../../../../types/data-types';
//style
import style from './counter.module.scss';

interface ICounterProps {
  item: IItemCardData;
}

const Counter = ({ item }: ICounterProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(InputStatuses.DEFAULT);
    }, 200);

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
      dispatch(incrementAction({ UNID: item.UNID, value: value }));
    }
  };

  const minusClickHandler = () => {
    const validateResult = validateInputData(value);
    if (validateResult === true && value !== null) {
      dispatch(decrementAction({ UNID: item.UNID, value: value }));
    }
  };

  return (
    <main className={style['counter']}>
      <ItemCardShort item={item} />

      <ControlSetValue
        onInputChangeHandler={onInputValueChangeHandler}
        value={value}
        status={status}
        message={message}
      />
      <div className={style.counter__controls}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </main>
  );
};

export default Counter;
