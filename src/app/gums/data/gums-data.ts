//types
import type { IGumsDataPackageType } from '../types/gums-data-types';
//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/gums-data-variables';
//libs
import { nanoid } from 'nanoid';

const gumsData: IGumsDataPackageType = {
  dataPackageName: 'gums',
  dataPackageUNID: 3001,
  items: [
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'ALFA PVC',
      name: 'Uszczelka czarna dynamiczna do profili',
      itemNumber: '794125',
      description: '(kolor etykiety niebieski)',
      image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
      color: '#2181FC',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'ALFA PVC',
      name: 'Uszczelka czarna dynamicznado profili',
      itemNumber: '794125',
      description: '(kolor etykiety niebieski 2x250)',
      image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
      color: '#2181FC',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'ALFA PVC',
      name: 'Uszczelka szara dynamiczna do profili',
      itemNumber: '794126',
      description: '(kolor etykiety zielony)',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#32BD43',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'ALFA PVC',
      name: 'Uszczelka szara dynamiczna do profili',
      itemNumber: '794126',
      description: '(kolor etykiety zielony) 2x250',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#32BD43',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'ALFA PVC',
      name: 'Uszczelka szara statyczna do listwy',
      itemNumber: '794091',
      description: '(kolor etykiety pomarańczowy)',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#d0312d',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'INEOS',
      name: 'Uszczelka szara statyczna do listwy',
      itemNumber: '794091',
      description: '(kolor etykiety pomarańczowy)',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#F4B084',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'ALFA PVC',
      name: 'Uszczelka czarna statyczna do listwy',
      itemNumber: '794096A',
      description: '(kolor etykiety biały)',
      image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
      color: '#ffff00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'INEOS',
      name: 'Uszczelka czarna statyczna do listwy',
      itemNumber: '794096A',
      description: '(kolor etykiety biały)',
      image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
      color: '#ffffff',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'Rottolin',
      name: 'Uszczelka czarna dynamiczna do profili',
      itemNumber: '794125',
      description: '(kolor etykiety niebieski)',
      image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
      color: '#004DFF',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'Rottolin',
      name: 'Uszczelka szara dynamiczna do profili',
      itemNumber: '794126',
      description: '(kolor etykiety zielony)',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#87FF00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'Rottolin',
      name: 'Uszczelka czarna do listwy ROTTOLIN',
      itemNumber: '794196',
      description: '(kolor etykiety biały)',
      image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
      color: '#ffffff',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'Rottolin',
      name: 'Uszczelka szara do listwy ROTTOLIN',
      itemNumber: '794142',
      description: '(kolor etykiety czerwony)',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#FFAA00',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
    {
      UNID: `gums-${nanoid()}`,
      amount: 0,
      firm: 'AluDE',
      name: 'Granulat PVC srebrny do produkcji uszczelki',
      itemNumber: '794124',
      description: '',
      image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
      color: '#c0c0c0',
      logs: {
        [GumsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
        [GumsLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
        },
      },
      lastChange: null,
      settings: {
        [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 500,
          name: 'Waga kartonu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      manufacturer: '',
    },
  ],
};

export default gumsData;
