//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
import { rootBaseName } from '../../../variables';
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
        image: `${rootBaseName}/images/chemistry/Solvent-770001-00030.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },
        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Atrament-70000-00030.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },
        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Solvent-SJN 1700.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },
        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Make-up-VJ706-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },
        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Atrament-VJ411-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Make-up-VJ7222-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Atrament-VJ411-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: 'szt',
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
        image: `${rootBaseName}/images/chemistry/Solvent-770001-00030.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
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
        image: `${rootBaseName}/images/chemistry/Atrament-70000-00030.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
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
        image: `${rootBaseName}/images/chemistry/Solvent-SJN 1700.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
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
        image: `${rootBaseName}/images/chemistry/Make-up-VJ706-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
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
        image: `${rootBaseName}/images/chemistry/Atrament-VJ411-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
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
        image: `${rootBaseName}/images/chemistry/Make-up-VJ7222-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
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
        image: `${rootBaseName}/images/chemistry/Atrament-VJ411-D.webp`,
        color: '',
        logs: {
          [ChemistryLogsNames.COUNTER]: {
            log: [],
            name: 'Licznik',
            lastChange: null,
          },
        },

        settings: {
          [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
            settingValue: 0,
            name: 'string',
          },
        },
        additionalResources: [],
        packagingInfo: 'butelka',
        unitsOfMeasurement: '',
      },
    ],
  },
];

export default chemistryData;
