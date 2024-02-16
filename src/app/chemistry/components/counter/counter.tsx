import { useState, useEffect } from 'react';
//components
import {
  ItemCardShort,
  ControlSetValue,
  ButtonPrimary,
  ButtonSecondary,
} from '../../../../components';
//variables
import { InputStatuses } from '../../../../variables';
//types
import type { IItemCardShort } from '../../../../types/data-types';
//style
import style from './counter.module.scss';

interface ICounterProps {
  item: IItemCardShort;
}

const Counter = ({ item }: ICounterProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(InputStatuses.DEFAULT);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  const textAdd = 'Dodać';

  const setCurrentStatus = (value: number | null) => {
    if (value === null) {
      setStatus(InputStatuses.ERROR);
      setMessage('Nic nie wpisanę w pole!');
    } else if (value === 0) {
      setStatus(InputStatuses.ERROR);
      setMessage('Nie można dodać/odjąć ZERO!');
    } else {
      setStatus(InputStatuses.SUCCESS);
      setMessage('');
    }
  };

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const plusClickHandler = () => {
    setCurrentStatus(value);
  };

  const minusClickHandler = () => {
    setCurrentStatus(value);
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
        <ButtonSecondary text={textAdd} clickHandler={plusClickHandler} />
        <ButtonPrimary text={textAdd} clickHandler={minusClickHandler} />
      </div>
    </main>
  );
};

export default Counter;
