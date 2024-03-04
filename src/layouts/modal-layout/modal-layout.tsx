import { ReactNode, MouseEvent } from 'react';
//styles
import style from './modal-layout.module.scss';

interface IModalLayoutProps {
  children: ReactNode;
  onOverlayClickHandler: () => void;
}

const ModalLayout = ({ children, onOverlayClickHandler }: IModalLayoutProps): JSX.Element => {
  const stopImmediatePropagation = (evt: MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
  };

  return (
    <div className={style['modal-layout']} onClick={onOverlayClickHandler}>
      <div className={style['modal-layout__content']} onClick={stopImmediatePropagation}>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
