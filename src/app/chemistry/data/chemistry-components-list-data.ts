//variables
import { ChemistryAppRouting } from '../variables';
//types
import type { ComponentsListDataType } from '../../../types';

const chemistryComponentsListData: ComponentsListDataType = [
  {
    title: ChemistryAppRouting.EKSTRUZJA.title,
    link: ChemistryAppRouting.EKSTRUZJA.path,
    image: 'https://aifo.pl/wp-content/uploads/2022/09/4a.jpg',
  },
  {
    title: ChemistryAppRouting.OKLEINA.title,
    link: ChemistryAppRouting.OKLEINA.path,
    image:
      'https://www.aluplast.com.pl/images/image-580x331/content/253/aluplast-sciezki-operatora-2_631ee9c17f0c37_43130552.jpg.jpg',
  },
];

export { chemistryComponentsListData };
