//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
//types
import type { IChemistryDataPackage } from '../types/data-types';

const chemistryData: IChemistryDataPackage = {
  dataPackageName: 'chemistry',
  dataPackageUNID: 1001,
  items: [
    {
      UNID: `chemistry-veneer-77001-003`,
      amount: 0,
      firm: '',
      name: 'Solvent',
      itemNumber: '77001-003',
      description: 'Drukarki Leibinger Jet2neo/jet2neos',
      image: '/images/chemistry/Solvent-770001-00030.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },
    {
      UNID: `chemistry-veneer-770000-00030`,
      amount: 0,
      firm: '',
      name: 'Atrament',
      itemNumber: '770000-00030',
      description: 'Drukarki Leibinger Jet2neo/jet2neos',
      image: '/images/chemistry/Atrament-70000-00030.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },
    {
      UNID: `chemistry-veneer-SJN1700`,
      amount: 0,
      firm: '',
      name: 'Solvent',
      itemNumber: 'SJN1700',
      description: 'Drukarki Leibinger Jet2neo/jet2neos',
      image: '/images/chemistry/Solvent-SJN 1700.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },

    {
      UNID: `chemistry-veneer-VJ706-D`,
      amount: 0,
      firm: '',
      name: 'Make-up',
      itemNumber: 'VJ706-D',
      description: 'Dotyczy drukarek 1220',
      image: '/images/chemistry/Make-up-VJ706-D.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },
    {
      UNID: `chemistry-veneer-VJ411-D`,
      amount: 0,
      firm: '',
      name: 'Atrament',
      itemNumber: 'VJ411-D',
      description: 'Dotyczy drukarek 1220',
      image: '/images/chemistry/Atrament-VJ411-D.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },

    {
      UNID: `chemistry-veneer-VJ7222-D`,
      amount: 0,
      firm: '',
      name: 'Make-up',
      itemNumber: 'VJ7222-D',
      description: 'Dotyczy drukarek 1580',
      image: '/images/chemistry/Make-up-VJ7222-D.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },
    {
      UNID: `chemistry-veneer-VJ4262-D`,
      amount: 0,
      firm: '',
      name: 'Atrament',
      itemNumber: 'VJ4262-D',
      description: 'Dotyczy drukarek 1580',
      image: '/images/chemistry/Atrament-VJ411-D.jpg',
      color: '',
      logs: {
        [ChemistryLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
        },
      },
      lastChange: null,
      settings: {
        [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'string',
        },
      },
      additionalResources: [],
      packagingInfo: 'butelka',
      manufacturer: '',
    },
  ],
};

export default chemistryData;
