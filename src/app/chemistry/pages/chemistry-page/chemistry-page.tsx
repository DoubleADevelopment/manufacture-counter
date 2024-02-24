import { useEffect, useState } from 'react';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetChemistryState } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//components
import { AdditionalNav, ItemsList } from '../../../../components';
//variables
import { ComponentsRouting } from '../../../../variables/component-routing-variables';
//types
import type { ItemsListDataType } from '../../../../types';
//styles
import style from './chemistry-page.module.scss';

const ChemistryPage = () => {
  const [cheistryData, setChemistryData] = useState<ItemsListDataType>();
  const [currentPackage, setCurrentPackage] = useState<string>('');
  const chemistryState = useAppSelector(SelectorGetChemistryState);

  const additionalNavForChemistry: string[] = [];
  for (const key in chemistryState) {
    additionalNavForChemistry.push(key);
  }

  useEffect(() => {
    const adaptedData = chemistryAdapterService.adaptDataToItemsList(
      chemistryState,
      currentPackage,
    );
    setChemistryData(adaptedData);
  }, [chemistryState, currentPackage]);

  const changePackageHandler = (value: string) => {
    setCurrentPackage(value);
  };

  return (
    <PageWithMenuLayout headerTitle={ComponentsRouting.CHEMISTRY.title}>
      <main className={style['chemistry-page']}>
        <AdditionalNav items={additionalNavForChemistry} changeHandler={changePackageHandler} />
        {cheistryData && <ItemsList data={cheistryData} additionalPath={currentPackage} />}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryPage;
