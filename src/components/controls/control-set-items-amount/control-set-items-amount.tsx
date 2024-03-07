import { ChangeEvent } from 'react';
//styles
import style from './control-set-items-amount.module.scss';

interface IControlSetItemsAmountProps {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  title: string;
}

const ControlSetItemsAmount = ({
  title,
  value,
  onInputChangeHandler,
}: IControlSetItemsAmountProps): JSX.Element => {
  return (
    <div className={style['control-set-amount']}>
      <label className={style['control-set-amount__label']}>
        {title}
        <input
          className={style['control-set-amount__input']}
          type="number"
          value={value ? value : ''}
          onChange={onInputChangeHandler}
        />
      </label>
    </div>
  );
};

export default ControlSetItemsAmount;
