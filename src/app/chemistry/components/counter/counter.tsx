import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import {
  ControlSetValue,
  ButtonPrimary,
  ButtonSecondary,
  NotificationStatic,
} from '../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { incrementAction, decrementAction } from '../../store/actions/actions';
import { SelectorCheckIsItemIsset } from '../../store/slectors/selectors';
//variables
import {
  InputStatuses,
  CounterText,
  CounterInputErrorsText,
  ErrorsText,
  NotificationType,
} from '../../../../variables';
//style
import style from './counter.module.scss';

interface UNIDParams {
  UNID: string;
}

const Counter = (): JSX.Element => {
  const { UNID } = useParams<keyof UNIDParams>() as UNIDParams;
  const [value, setValue] = useState<number | null>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const itemFromUnidIsset = useAppSelector(SelectorCheckIsItemIsset(UNID));

  const dispatch = useAppDispatch();

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
      dispatch(incrementAction({ UNID: UNID, value: value }));
    }
  };

  const minusClickHandler = () => {
    const validateResult = validateInputData(value);
    if (validateResult === true && value !== null) {
      dispatch(decrementAction({ UNID: UNID, value: value }));
    }
  };

  return (
    <main className={style['counter']}>
      {itemFromUnidIsset ? (
        <>
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
        </>
      ) : (
        <NotificationStatic
          headingText="Błąd przy otwarciu licznika"
          paragraphText={ErrorsText.COMPONENT_NOT_FOUND}
          type={NotificationType.ERROR}
        />
      )}
    </main>
  );
};

export default Counter;
