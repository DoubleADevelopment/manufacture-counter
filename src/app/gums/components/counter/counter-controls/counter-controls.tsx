//components
import GumsBasicCounter from '../gums-basic-counter/gums-basic-counter';
//styles
import style from './counter-controls.module.scss';
import { SelectorGetItemData } from '../../../store/slectors/selectors';
import GumsCounterSwitcher from '../gums-counter-switcher/gums-counter-switcher';
import { useAppSelector } from '../../../../../hooks/hooks';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const itemData = useAppSelector(SelectorGetItemData(UNID));

  const renderedCounters = (): JSX.Element => {
    if (itemData.counters?.length) {
      return <GumsCounterSwitcher counters={itemData.counters} UNID={UNID} />;
    } else {
      return (
        <section className={style['counter-controls']}>
          <h2 className="visually-hidden">Licnik</h2>
          <GumsBasicCounter UNID={UNID} />
        </section>
      );
    }
  };

  return <>{renderedCounters()}</>;
  // const [currentCounter, setCurrentCounter] = useState<string>(GUMS_COUNTERS.CARDBOARD);

  // const getCurrentCounterComponent = (): JSX.Element => {
  //   switch (currentCounter) {
  //     case GUMS_COUNTERS.CARDBOARD:
  //       return <GumsCardboardCounter UNID={UNID} />;
  //     case GUMS_COUNTERS.COUNTER:
  //       return <GumsBasicCounter UNID={UNID} />;
  //     default:
  //       return (
  //         <PageNotification
  //           type={NotificationType.ERROR}
  //           headingText={ErrorsText.COUNTER_OPENING_ERROR}
  //           paragraphText={`${ErrorsText.FAILED_OPEN_COUNTER_CALLED_COUNTERNAME} "${currentCounter}".`}
  //           additionalInfo={`"${currentCounter}" nie odpowiada liscie liczników GUMS_COUNTERS.`}
  //         />
  //       );
  //   }
  // };

  // const additionalNavHandler = (value: string): void => {
  //   setCurrentCounter(value);
  // };

  // return (
  //   <>
  //     <section className={style['counter-controls']}>
  //       <h2 className="visually-hidden">Licnik</h2>
  //       <AdditionalNav
  //         changeHandler={additionalNavHandler}
  //         items={gumsCountersList}
  //         defaultItem={currentCounter}
  //       />

  //       {getCurrentCounterComponent()}
  //     </section>
  //   </>
  // );
};

export default CounterControls;
