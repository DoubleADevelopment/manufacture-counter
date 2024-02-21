import { useState } from 'react';
//store
import { useAppDispatch } from '../../../../hooks/hooks';
import { clearItemDataAction } from '../../store/actions/actions';
//components
import { ItemCardShort, LogsModal } from '../../../../components';
//variables
import { UnitsOfMeasurementText } from '../../../../variables/text-variables';
//types
import type { IItemCardData, ILogsType } from '../../../../types/data-types';

interface ICounterItemInfo {
  itemLogs: ILogsType;
  convertedItem: IItemCardData;
}

const CounterItemInfo = ({ itemLogs, convertedItem }: ICounterItemInfo): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onCardClickHandler = () => {
    setModalIsOpen(true);
  };

  const onModalClickHandler = () => {
    setModalIsOpen(false);
  };

  const onClearDataButtonClickHandler = () => {
    dispatch(clearItemDataAction({ UNID: convertedItem.UNID }));
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen && (
        <LogsModal
          logsData={itemLogs}
          closeModal={onModalClickHandler}
          clearData={onClearDataButtonClickHandler}
        />
      )}

      <ItemCardShort
        onCardClickHandler={onCardClickHandler}
        item={convertedItem}
        measurementText={UnitsOfMeasurementText.AMOUNT}
      />
    </>
  );
};

export default CounterItemInfo;
