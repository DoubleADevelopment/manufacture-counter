import { useState } from 'react';
//components
import { ItemCardShort, LogsModal } from '../..';
//types
import type { IItemDataToDisplay } from '../../../types';

interface IShortCardWithLogsModal {
  item: IItemDataToDisplay | undefined;
  clearDataHandler: () => void;
}

const ShortCardWithLogsModal = ({
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
      {modalIsOpen && item && (
        <LogsModal
          logsData={item.logs}
          closeModal={onModalClickHandler}
          clearData={onClearDataButtonClickHandler}
        />
      )}

      <ItemCardShort onCardClickHandler={onCardClickHandler} item={item} />
    </>
  );
};

export default ShortCardWithLogsModal;
