import { useParams } from 'react-router-dom';
//layouts
import { PageWithHeaderLayout } from '../../../../layouts';
//components
import { CounterHeader, Counter } from '../../components';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//types
import type { IItemCardData } from '../../../../types/data-types';

interface UNIDParams {
  UNID: string;
}

const CounterPage = (): JSX.Element => {
  const { UNID } = useParams<keyof UNIDParams>() as UNIDParams;
  const item: IItemCardData = chemistryAdapterService.adaptItemToShort(
    useAppSelector(SelectorGetCurrentChemistry(UNID)),
  );

  return (
    <PageWithHeaderLayout>
      <CounterHeader />
      {item && <Counter item={item} />}
    </PageWithHeaderLayout>
  );
};

export default CounterPage;
