//variables
import ChemistryBasicCounter from '../chemistry-basic-counter/chemistry-basic-counter';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  return (
    <section className={style['counter-controls']}>
      <h2 className="visually-hidden">Licnik</h2>
      <ChemistryBasicCounter UNID={UNID} />
    </section>
  );
};

export default CounterControls;
