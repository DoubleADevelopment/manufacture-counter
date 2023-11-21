//vars
import {
  ChemistryLogsNames,
  ChemistrySettingsNames,
} from '../variables/data-variables/data-variables';
//types
import type { ChemistryDataType } from '../types/data-types/chemistry-data-types';
//libs
import { nanoid } from 'nanoid';

const chemistryData: ChemistryDataType = [
  {
    dataPackageName: 'chemistry-veneer',
    dataPackageUNID: 1001,
    items: [
      {
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Solvent',
        itemNumber: '77001-003',
        description: 'Drukarki Leibinger Jet2neo/jet2neos',
        image: '/aluplast-components-counter/images/chemistry/Solvent-770001-00030.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Atrament',
        itemNumber: '770000-00030',
        description: 'Drukarki Leibinger Jet2neo/jet2neos',
        image: '/aluplast-components-counter/images/chemistry/Atrament-70000-00030.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Solvent',
        itemNumber: 'SJN1700',
        description: 'Drukarki Leibinger Jet2neo/jet2neos',
        image: '/aluplast-components-counter/images/chemistry/Solvent-SJN 1700.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Make-up',
        itemNumber: 'VJ706-D',
        description: 'Dotyczy drukarek 1220',
        image: '/aluplast-components-counter/images/chemistry/Make-up-VJ706-D.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Atrament',
        itemNumber: 'VJ411-D',
        description: 'Dotyczy drukarek 1220',
        image: '/aluplast-components-counter/images/chemistry/Atrament-VJ411-D.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Make-up',
        itemNumber: 'VJ7222-D',
        description: 'Dotyczy drukarek 1580',
        image: '/aluplast-components-counter/images/chemistry/Make-up-VJ7222-D.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
        UNID: `chemistry-veneer-${nanoid()}`,
        amount: 0,
        firm: '',
        name: 'Atrament',
        itemNumber: 'VJ4262-D',
        description: 'Dotyczy drukarek 1580',
        image: '/aluplast-components-counter/images/chemistry/Atrament-VJ411-D.jpg',
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'string',
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
  },
  {
    dataPackageName: 'chemistry-extrusion',
    dataPackageUNID: 1002,
    items: [],
  },
];

export default chemistryData;
