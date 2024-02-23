import { useState } from 'react';
//components
import { ItemCardShort, LogsModal } from '../../';
//variables
import { UnitsOfMeasurementText } from '../../../variables/text-variables';
//types
import type { IItemCardData, ILogsType } from '../../../types/data-types';

interface IShortCardWithLogs {
  itemLogs: ILogsType;
  item: IItemCardData;
  clearDataHandler: (id: string) => void;
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
    clearDataHandler(item.UNID);
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
