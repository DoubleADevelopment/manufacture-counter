import { useState } from 'react';
//components
import { ItemCardShort, LogsModal } from '../../';
//variables
import { UnitsOfMeasurementText } from '../../../variables/';
//types
import type { IItemCardData, ILogs } from '../../../types/';

interface IShortCardWithLogs {
  itemLogs: ILogs;
  item: IItemCardData;
  clearDataHandler: () => void;
}

const ShortCardWithLogs = ({
  itemLogs,
  item,
  clearDataHandler,
}: IShortCardWithLogs): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const onCardClickHandler = () => {
    setModalIsOpen(true);
  };

  const onModalClickHandler = () => {
    setModalIsOpen(false);
  };

  const onClearDataButtonClickHandler = () => {
    clearDataHandler();
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
        item={item}
        measurementText={UnitsOfMeasurementText.AMOUNT}
      />
    </>
  );
};

export default ShortCardWithLogs;
