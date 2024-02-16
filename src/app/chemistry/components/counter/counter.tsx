import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import {
  ItemCardShort,
  ControlSetValue,
  ButtonPrimary,
  ButtonSecondary,
} from '../../../../components';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//variables
import { InputStatuses } from '../../../../variables';
//types
import type { IItemCardShort } from '../../../../types/data-types';
import type { IChemistryDataItemType } from '../../types/data-types';
//style
import style from './counter.module.scss';

const Counter = (): JSX.Element => {
  const { UNID } = useParams();
  const [value, setValue] = useState<number | null>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);
  const [item, setItem] = useState<IChemistryDataItemType | null>(null);
  const [itemCardShortData, setItemCardShortData] = useState<IItemCardShort | null>(null);

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
    if (value === null) {
      setStatus(InputStatuses.ERROR);
      setMessage('Nic nie wpisanę w pole!');
    } else if (value === 0) {
      setStatus(InputStatuses.ERROR);
      setMessage('Nie można dodać/odjąć ZERO!');
    } else {
      // dispatch(this.incrementAction({ UNID: currentItemUNID, value: value }));
      // dispatch(logAction({ UNID: currentItemUNID, logName: logName, logValue: `+${value}kg` }));
      setStatus(InputStatuses.SUCCESS);
      setMessage('');
    }
  };

  const selectedItem = useAppSelector((state) => {
    if (UNID) {
      return SelectorGetCurrentChemistry(UNID)(state);
    }
    return null;
  });

  useEffect(() => {
    setItem(selectedItem);

    if (item) {
      const itemCardShortData = {
        name: item.name,
        description: item.description,
        itemNumber: item.itemNumber,
        packagingInfo: item.packagingInfo,
        image: item.image,
      };
      setItemCardShortData(itemCardShortData);
    }
  }, [UNID, item]);

  const textAdd = 'Dodać';

  const addClickHandler = () => {
    console.log('click');
  };

  return (
    <main className={style['counter']}>
      {itemCardShortData && <ItemCardShort item={itemCardShortData} />}

      <ControlSetValue
        onInputChangeHandler={onInputValueChangeHandler}
        value={value}
        status={status}
        message={message}
      />
      <div className={style.counter__controls}>
        <ButtonSecondary text={textAdd} clickHandler={addClickHandler} />
        <ButtonPrimary text={textAdd} clickHandler={addClickHandler} />
      </div>
    </main>
  );
};

export default Counter;
