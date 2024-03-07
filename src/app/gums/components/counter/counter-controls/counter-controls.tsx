//components
import { AdditionalNav, BasicCounter } from '../../../../../components';
//store
import { useAppDispatch } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value }));
  };
  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value }));
  };

  const additionalNavHandler = (value: string): void => {
    console.log(value);
  };
  return (
    <>
      <section className={style['counter-controls']}>
        <h2 className="visually-hidden">Licnik</h2>
        <AdditionalNav changeHandler={additionalNavHandler} items={['licznik', 'kartony']} />
        <BasicCounter inc={inc} dec={dec} />
      </section>
    </>
  );
};

export default CounterControls;
