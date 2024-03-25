//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
import { rootBaseName } from '../../../variables';
//types
import type { IPackage } from '../../../types';

const chemistryData: IPackage = {
  dataPackageName: 'chemistry',
  dataPackageUNID: 1001,
  dataStorageName: 'chemistry-data-1001',
  items: [
    {
      UNID: `chemistry-Solvent-77001-00030`,
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
};

export default chemistryData;
