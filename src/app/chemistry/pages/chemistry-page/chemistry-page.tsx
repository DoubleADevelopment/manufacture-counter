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
import { ChemistryPackagesNames } from '../../variables/data-variables';

const ChemistryPage = () => {
  const [cheistryData, setChemistryData] = useState<ItemsListDataType>();
  const [currentPackage, setCurrentPackage] = useState<ChemistryPackagesNames>(
    ChemistryPackagesNames.EKSTRUZJA,
  );
  const chemistryData = useAppSelector(SelectorGetChemistryState);

  const additionalNavForChemistry: string[] = [
    ChemistryPackagesNames.EKSTRUZJA,
    ChemistryPackagesNames.OKLEINA,
  ];

  useEffect(() => {
    const adaptedData = chemistryAdapterService.adaptDataToItemsList(chemistryData, currentPackage);
    setChemistryData(adaptedData);
  }, [chemistryData, currentPackage]);

  const changePackageHandler = (value: ChemistryPackagesNames) => {
    console.log('change - ' + value);
    setCurrentPackage(value);
  };

  return (
    <PageWithMenuLayout headerTitle={ComponentsRouting.CHEMISTRY.title}>
      <main className={style['chemistry-page']}>
        <AdditionalNav items={additionalNavForChemistry} changeHandler={changePackageHandler} />
        {cheistryData && <ItemsList data={cheistryData} path={currentPackage} />}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryPage;
