//types
import type { IPackage } from '../../../types';
//vars
import { rootBaseName } from '../../../variables';
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';

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
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-MASTERTEC-799531',
      amount: 0,
      manufactured: 'MASTERTEC',
      productName: 'Pigment antracyt- B1800055 HEUCOBATCH Dark grey 790 199',
      systemCode: '799531',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-antracyt.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-MASTERTEC-799602',
      amount: 0,
      manufactured: 'MASTERTEC',
      productName: 'Pigment krem- HEUCOBATCH Cream 190 193',
      systemCode: '799602',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-cream.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-MASTERTEC-799547',
      amount: 0,
      manufactured: 'MASTERTEC',
      productName: 'Pigment ochra- HEUCOBATCH Ocher brown',
      systemCode: '799547',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-ochra.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-MASTERTEC-799290',
      amount: 0,
      manufactured: 'MASTERTEC',
      productName: 'Pigment brązowy- B1800488 dark brown',
      systemCode: '799290',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-braz.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-BASF-799600',
      amount: 0,
      manufactured: 'BASF',
      productName: 'Sicovinyl White 00-9065 BASF',
      systemCode: '799600',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-bialy.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-BASF-799805',
      amount: 0,
      manufactured: 'BASF',
      productName: 'Sicovinyl Yellow 10-0895 BASF',
      systemCode: '799805',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-zolty.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-BASF-799544',
      amount: 0,
      manufactured: 'BASF',
      productName: 'Sicovinyl Black 02-270795 BASF',
      systemCode: '799544',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-antracyt.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-MASTERTEC-799291',
      amount: 0,
      manufactured: 'MASTERTEC',
      productName: 'Pigment Light  Grey  -M1700345',
      systemCode: '799291',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-szary.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-INEOS-Ekomer-799199',
      amount: 0,
      manufactured: 'INEOS/Ekomer',
      productName: 'Masa wysokostabilna- Evicom granulat ACF400/5hellblau 5154 ',
      systemCode: '799199',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-shelblue.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 25,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
    {
      UNID: 'pigment-Colorstab-799199',
      amount: 0,
      manufactured: 'Colorstab',
      productName: 'Masa wysokostabilna CMX/1',
      systemCode: '799199',
      description: '',
      additionalInfo: '',
      image: `${rootBaseName}/images/pigments/pigment-massa-wysokostabilna.webp`,
      color: '',
      logs: {
        [PigmentsLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [PigmentsLogsNames.CONTAINER]: {
          log: [],
          name: 'Kontenery',
          lastChange: null,
        },
        [PigmentsLogsNames.BAG]: {
          log: [],
          name: 'Worki',
          lastChange: null,
        },
      },

      settings: {
        [PigmentsSettingsNames.BASE_BAG_VALUE]: {
          settingValue: 20,
          name: 'Waga jednego worka / KG',
        },
        [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
          settingValue: 0,
          name: 'Waga kontenera / KG',
        },
        [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
          settingValue: 77,
          name: 'Waga jednego kontenera / KG',
        },
        [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 0,
          name: 'Waga pigmentu / KG',
        },
      },
      additionalResources: [],
      packagingInfo: 'karton',
      unitsOfMeasurement: 'kg',
    },
  ],
};

export default pigmentsData;
