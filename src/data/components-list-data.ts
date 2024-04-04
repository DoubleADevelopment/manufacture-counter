//types
import type { ComponentsDataListType } from '../types';
//data
import chemistryData from '../app/chemistry/data/chemistry-data';
import gumsData from '../app/gums/data/gums-data';
import pigmentsData from '../app/pigments/data/pigments-data';
import suppliesData from '../app/supplies/data/supplies-data';

const allPackagesData = [chemistryData, gumsData, pigmentsData, suppliesData];

const componentsListData: ComponentsDataListType = allPackagesData.map((pack) => {
  return {
    title: pack.packageTitle,
    link: pack.dataPackageName,
    image: pack.packageImage,
  };
});

export { componentsListData };
