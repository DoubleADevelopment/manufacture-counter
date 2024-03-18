import { useState } from 'react';
//components
import { ItemCardShort, LogsModal } from '../..';
//types
import type { IItemDataToDisplay, ILogs } from '../../../types';

interface IShortCardWithLogsModal {
  itemLogs: ILogs | undefined;
  item: IItemDataToDisplay | undefined;
  clearDataHandler: () => void;
}

const ShortCardWithLogsModal = ({
  itemLogs,
  item,
  clearDataHandler,
}: IShortCardWithLogsModal): JSX.Element => {
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
      {modalIsOpen && itemLogs && (
        <LogsModal
          logsData={itemLogs}
          closeModal={onModalClickHandler}
          clearData={onClearDataButtonClickHandler}
        />
      )}

      <ItemCardShort onCardClickHandler={onCardClickHandler} item={item} />
    </>
  );
};

export default ShortCardWithLogsModal;
