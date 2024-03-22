//types
import { rootBaseName } from '../../../variables';
import type { IGumsPackage } from '../types/data-types';
//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/data-variables';

const gumsData: IGumsPackage = {
  dataPackageName: 'gums',
  dataPackageUNID: 3001,
  items: [
    {
      UNID: 'gums-ALFA-PVC-794125',
      amount: 0,
      manufactured: 'ALFA PVC',
      productName: 'Uszczelka czarna dynamiczna do profili ',
      systemCode: '794125',
      description: 'kolor etykiety niebieski, 500kg',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka czarna.jpg`,
      color: '#2181FC',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-ALFA-PVC-250kg',
      amount: 0,
      manufactured: 'ALFA PVC',
      productName: 'Uszczelka czarna dynamiczna do profili ',
      systemCode: '',
      description: 'kolor etykiety niebieski, 250kg',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka czarna.jpg`,
      color: '#2181FC',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-ALFA-PVC-794126',
      amount: 0,
      manufactured: 'ALFA PVC',
      productName: 'Uszczelka szara dynamiczna do profili',
      systemCode: '794126',
      description: 'kolor etykiety zielony, 500kg',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '#32BD43',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-ALFA-PVC-250kg',
      amount: 0,
      manufactured: 'ALFA PVC',
      productName: 'Uszczelka szara dynamiczna do profili',
      systemCode: '',
      description: 'kolor etykiety zielony, 250kg',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '#32BD43',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-ALFA-PVC-794096A',
      amount: 0,
      manufactured: 'ALFA PVC',
      productName: 'Uszczelka czarna statyczna do listwy',
      systemCode: '794096A',
      description: 'kolor etykiety biały',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '#ffff00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-ALFA-PVC-794091',
      amount: 0,
      manufactured: 'ALFA PVC',
      productName: 'Uszczelka szara statyczna do listwy',
      systemCode: '794091',
      description: 'kolor etykiety pomarańczowy, 550kg',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '#d0312d',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-INEOS-794096A',
      amount: 0,
      manufactured: 'INEOS',
      productName: 'Uszczelka czarna statyczna do listwy',
      systemCode: '794096A',
      description: 'kolor etykiety biały, 550kg',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka czarna.jpg`,
      color: '#ffff00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-INEOS-794091',
      amount: 0,
      manufactured: 'INEOS',
      productName: 'Uszczelka szara statyczna do listwy',
      systemCode: '794091',
      description: 'kolor etykiety pomarańczowy',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka czarna.jpg`,
      color: '#d0312d',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-Rottolin-794125',
      amount: 0,
      manufactured: 'Rottolin',
      productName: 'Uszczelka czarna dynamiczna do profili',
      systemCode: '794125',
      description: 'kolor etykiety niebieski',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka czarna.jpg`,
      color: '#004DFF',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-Rottolin-794126',
      amount: 0,
      manufactured: 'Rottolin',
      productName: 'Uszczelka szara dynamiczna do profili',
      systemCode: '794126',
      description: 'kolor etykiety zielony',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '#87FF00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-Rottolin-794196',
      amount: 0,
      manufactured: 'Rottolin',
      productName: 'Uszczelka czarna do listwy ROTTOLIN',
      systemCode: '794196',
      description: 'kolor etykiety biały',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka czarna.jpg`,
      color: '#ffffff',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-Rottolin-794142',
      amount: 0,
      manufactured: 'Rottolin',
      productName: 'Uszczelka szara do listwy ROTTOLIN',
      systemCode: '794142',
      description: 'kolor etykiety czerwony',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '#FFAA00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'gums-AluDE-794124',
      amount: 0,
      manufactured: 'AluDE',
      productName: 'Granulat PVC srebrny do produkcji uszczelki',
      systemCode: '794124',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/gums/uszczelka szara.jpg`,
      color: '',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },

      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
        [GumsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 500,
          name: 'Waga gumy / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
  ],
};

export default gumsData;
