import { ChangeEvent } from 'react';
//styles
import style from './control-set-items-amount.module.scss';

interface IControlSetItemsAmountProps {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  titleBefore: string;
  titleAfter?: string;
}

const ControlSetItemsAmount = ({
  titleBefore,
  titleAfter,
  value,
  onInputChangeHandler,
}: IControlSetItemsAmountProps): JSX.Element => {
  return (
    <div className={style['control-set-amount']}>
      <label className={`${style['control-set-amount__label']} content-primary-a label-medium`}>
        {titleBefore}
        <input
          className={`${style['control-set-amount__input']} content-primary-a label-large`}
          type="number"
          value={value ? value : ''}
          onChange={onInputChangeHandler}
        />
        {titleAfter}
      </label>
    </div>
  );
};

export default ControlSetItemsAmount;
