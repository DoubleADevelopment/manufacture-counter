//layouts
import { PageWithMenuLayout } from '../../layouts';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetExtrusionChemistry } from '../../app/chemistry/store/slectors/selectors';
import { SelectorGetGums } from '../../app/gums/store/slectors/selectors';
import { SelectorGetPigments } from '../../app/pigments/store/slectors/selectors';
//app components
import chemistryAdapterService from '../../app/chemistry/services/chemistry-adapter.service';
import gumsAdapterService from '../../app/gums/services/gums-adapter.service';
import pigmentsAdapterService from '../../app/pigments/services/pigments-adapter.service';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = chemistryAdapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetExtrusionChemistry()),
  );
  const gumsData = gumsAdapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetGums()),
  );
  const pigmentsData = pigmentsAdapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetPigments()),
  );

  console.log(chemistryData);
  console.log(gumsData);
  console.log(pigmentsData);

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}>
        <section>
          <h2>Chemia</h2>

          <ul>
            {chemistryData.map((item) => {
              return (
                <li>
                  <h3>{item.productName}</h3>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
