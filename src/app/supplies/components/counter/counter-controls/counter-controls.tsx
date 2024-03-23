//components
import SuppliesBasicCounter from '../supplies-basic-counter/supplies-basic-counter';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  return (
    <section className={style['counter-controls']}>
      <h2 className="visually-hidden">Licnik</h2>
      <SuppliesBasicCounter UNID={UNID} />
    </section>
  );
};

export default CounterControls;
