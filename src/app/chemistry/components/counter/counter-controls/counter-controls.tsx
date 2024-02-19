import { useEffect, useState } from 'react';
//components
import { ButtonPrimary, ButtonSecondary, ControlSetValue } from '../../../../../components';
//store
import { useAppDispatch } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
//variables
import { CounterInputErrorsText, CounterText, InputStatuses } from '../../../../../variables';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

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
    <div className={style['counter-controls']}>
      <ControlSetValue
        onInputChangeHandler={onInputValueChangeHandler}
        value={value}
        status={status}
        message={message}
      />
      <div className={style['counter-controls__buttons']}>
        <ButtonSecondary text={CounterText.MINUS} clickHandler={minusClickHandler} />
        <ButtonPrimary text={CounterText.PLUS} clickHandler={plusClickHandler} />
      </div>
    </div>
  );
};

export default CounterControls;
