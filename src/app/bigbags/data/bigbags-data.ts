//types
import { IPackage } from '../../../types';
//variables
import { rootBaseName } from '../../../variables';

const bigbagsData: IPackage = {
  dataPackageName: 'bigbags',
  dataPackageUNID: 5001,
  dataStorageName: 'bigbag-data-3001',
  packageTitle: 'Bigbags',
  packageCounterTitle: 'Licznik bigbag',
  packageImage: `${rootBaseName}/images/bigbags/big-bag.webp`,
  items: [
    {
      UNID: '',
      amount: 0,
      manufactured: 'SILOS',
      productName: 'Re granulat',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/bigbags/big-bag.webp`,
      color: '',
      counters: {
        BIGBAGS: {
          counterSystemName: 'BIGBAGS',
          counterTitle: 'Bigbagi',
          counterLogTitle: 'Bigbagi',
          logs: [],
          lastChange: null,
          counterBaseValue: 1,
          counterBaseValueTitle: 'Ilość bigbagów / szt',
          counterAdditionalValue: 1000,
          counterAdditionalValueTitle: 'Waga bigbaga / KG',
          counterType: 'ADDITIONAL_VALUE_COUNTER',
          operationBetweenBaseAndAddition: 'multiplication',
        },
        COUNTER: {
          counterSystemName: 'COUNTER',
          counterTitle: 'Licznik',
          counterLogTitle: 'Licznik',
          logs: [],
          lastChange: null,
          counterBaseValue: 0,
          counterBaseValueTitle: 'Waga bigbaga / KG',
          counterAdditionalValue: 0,
          counterAdditionalValueTitle: '',
          counterType: 'BASIC_COUNTER',
          operationBetweenBaseAndAddition: 'none',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
  ],
};

export default bigbagsData;
