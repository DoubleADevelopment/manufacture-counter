//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
//types
import type { ChemistryPackagesListType } from '../types/';
import { ChemistryPackagesNames } from '../variables/';

const chemistryData: ChemistryPackagesListType = [
  {
    dataPackageName: ChemistryPackagesNames.EXTRUSION,
    dataPackageUNID: 1001,
    items: [
      {
        UNID: `chemistry-Solvent-77001-00030`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Solvent 77001-00030',
        systemCode: '',
        description: 'z czipem wymagającym otagowania',
        additionalInfo: 'Drukarki Leibinger Jet2neo/Jet2neoS',
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
      },
      {
        UNID: `chemistry-Atrament-70000-00030`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Atrament 70000-00030',
        systemCode: '',
        description: 'ASN 1030, z czipem wymagającym otagowania',
        additionalInfo: 'Drukarki Leibinger Jet2neo/Jet2neoS',
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
      },
      {
        UNID: `chemistry-Solvent-SJN1700`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Solvent SJN1700',
        systemCode: '',
        description: 'wykorzystywany do mycia głowicy',
        additionalInfo: 'Drukarki Leibinger Jet2neo/Jet2neoS',
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
      },

      {
        UNID: `chemistry-Make-up-VJ706-D`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Make-up VJ706-D',
        systemCode: '',
        description: '',
        additionalInfo: 'dot. drukarek 1220',
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
      },
      {
        UNID: `chemistry-Atrament-VJ411-D`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Atrament VJ411-D',
        systemCode: '',
        description: '',
        additionalInfo: 'dot. drukarek 1220',
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
      },

      {
        UNID: `chemistry-Make-up-VJ7222-D`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Make-up VJ7222-D',
        systemCode: '',
        description: '',
        additionalInfo: 'dot. drukarek 1580',
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
      },
      {
        UNID: `chemistry-Atrament-VJ4262-D`,
        packageName: ChemistryPackagesNames.EXTRUSION,
        amount: 0,
        manufactured: '',
        productName: 'Atrament VJ4262-D',
        systemCode: '',
        description: '',
        additionalInfo: 'dot. drukarek 1580',
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
      },
    ],
  },
  {
    dataPackageName: ChemistryPackagesNames.VENEER,
    dataPackageUNID: 1002,
    items: [
      {
        UNID: `chemistry-veneer-77001-003`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Solvent',
        systemCode: '77001-003',
        description: 'Drukarki Leibinger Jet2neo/jet2neos',
        additionalInfo: '',
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
      },
      {
        UNID: `chemistry-veneer-770000-00030`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Atrament',
        systemCode: '770000-00030',
        description: 'Drukarki Leibinger Jet2neo/jet2neos',
        additionalInfo: '',
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
      },
      {
        UNID: `chemistry-veneer-SJN1700`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Solvent',
        systemCode: 'SJN1700',
        description: 'Drukarki Leibinger Jet2neo/jet2neos',
        additionalInfo: '',
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
      },

      {
        UNID: `chemistry-veneer-VJ706-D`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Make-up',
        systemCode: 'VJ706-D',
        description: 'Dotyczy drukarek 1220',
        additionalInfo: '',
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
      },
      {
        UNID: `chemistry-veneer-VJ411-D`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Atrament',
        systemCode: 'VJ411-D',
        description: 'Dotyczy drukarek 1220',
        additionalInfo: '',
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
      },

      {
        UNID: `chemistry-veneer-VJ7222-D`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Make-up',
        systemCode: 'VJ7222-D',
        description: 'Dotyczy drukarek 1580',
        additionalInfo: '',
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
      },
      {
        UNID: `chemistry-veneer-VJ4262-D`,
        packageName: ChemistryPackagesNames.VENEER,
        amount: 0,
        manufactured: '',
        productName: 'Atrament',
        systemCode: 'VJ4262-D',
        description: 'Dotyczy drukarek 1580',
        additionalInfo: '',
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
      },
    ],
  },
];

export default chemistryData;
