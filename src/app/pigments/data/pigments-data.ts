//types
import type { IPackage } from '../../../types';
//vars
import { COUNTERS, rootBaseName } from '../../../variables';

const pigmentsData: IPackage = {
  dataPackageName: 'pigments',
  dataPackageUNID: 2001,
  dataStorageName: 'pigments-data-2001',
  items: [
    {
      UNID: 'pigment-AURUM-799549',
      amount: 0,
      manufactured: 'AURUM',
      productName: 'Pigment brązowy - CROMOFIX MARRON/BROWN IQAP',
      systemCode: '799549',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-braz.webp`,
      color: '',
      counters: {
        BAGS: {
          counterSystemName: 'BAGS',
          counterTitle: 'Worki',
          counterLogTitle: 'Worki',
          logs: [],
          lastChange: null,
          counterBaseValue: 1,
          counterBaseValueTitle: 'Ilość worków',
          counterAdditionalValue: 25,
          counterAdditionalValueTitle: 'Waga jednego worka / KG',
          counterType: COUNTERS.ADDITIONAL_VALUE_COUNTER,
        },
        COUNTER: {
          counterSystemName: 'COUNTER',
          counterTitle: 'Licznik',
          counterLogTitle: 'Licznik',
          logs: [],
          lastChange: null,
          counterBaseValue: 400,
          counterBaseValueTitle: 'Ilość pigmentu w kg',
          counterAdditionalValue: 0,
          counterAdditionalValueTitle: '',
          counterType: COUNTERS.BASIC_COUNTER,
        },
        CONTAINER: {
          counterSystemName: 'CONTAINER',
          counterTitle: 'Licznik',
          counterLogTitle: 'Licznik',
          logs: [],
          lastChange: null,
          counterBaseValue: 500,
          counterBaseValueTitle: 'Waga kontenera / KG',
          counterAdditionalValue: 77,
          counterAdditionalValueTitle: 'Waga jednego kontenera / KG',
          counterType: COUNTERS.ADDITIONAL_VALUE_COUNTER,
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
  ],
};

export default pigmentsData;
