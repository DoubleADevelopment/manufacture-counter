//types
// import { rootBaseName } from '../../../variables';
import { COUNTERS_TYPES } from '../../../variables';
import type { ISuppliesPackage } from '../types/data-types';
//vars
import { SUPPLIES_COUNTERS, SuppliesLogsNames, SuppliesSettingsNames } from '../variables';

const suppliesData: ISuppliesPackage = {
  dataPackageName: 'supplies',
  dataPackageUNID: 3004,
  items: [
    {
      UNID: 'supplies-abc123',
      amount: 0,
      manufactured: '',
      productName: 'Przekładki polipropylenowe (do listwy) - zamówienia J. Wasielewska',
      systemCode: '',
      description: '',
      additionalInfo: '3 kartony (karton ma 5 tyś szt)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fltpack.pl%2Fwp-content%2Fuploads%2F2021%2F01%2Fxprzekladki.jpg.pagespeed.ic.KGXeZCVNg5.jpg&f=1&nofb=1&ipt=a8d8ab734faa3ee13b14b582f709b3b6036be8d400496e9c0cf0dacc50e465f7&ipo=images`,
      color: '',
      counters: [
        { counterName: SUPPLIES_COUNTERS.COUNTER, counterComponent: COUNTERS_TYPES.BASIC_COUNTER },
        {
          counterName: SUPPLIES_COUNTERS.CARDBOARD,
          counterComponent: COUNTERS_TYPES.COUNTER_WITH_ADDITIONAL_VALUE,
        },
        {
          counterName: 'test',
          counterComponent: COUNTERS_TYPES.COUNTER_WITH_ADDITIONAL_VALUE,
        },
      ],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-def456',
      amount: 0,
      manufactured: '',
      productName: 'Taśma do bandowania - GREENSTRAP (15,5X0,90MM), 1400m zielona karb.',
      systemCode: '',
      description: '',
      additionalInfo: '1 paleta (48szt.)',
      image: `https://static.ajproducts.com/resize/globalassets/147692.jpg?ref=1BCA618C1B&width=1472`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-ghi789',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw biały 1400 perforacja co 7,5',
      systemCode: '',
      description: '',
      additionalInfo: '40 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-jkl012',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1200 perforacja co 7',
      systemCode: '',
      description: '',
      additionalInfo: '20 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-mno345',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarno-biały 1200 perforacja co 7,0 90 µm',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '#ffff00',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-pqr678',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarno-biały 1400 perforacja co 7,5 90 µm',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '#ffff00',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-stu901',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarno-biały 1400 perforacja co 7,0 90 µm',
      systemCode: '',
      description: '',
      additionalInfo: '10 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '#ffff00',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-vwx234',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1400 perforacja co 7,5',
      systemCode: '',
      description: '',
      additionalInfo: '40 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-yza567',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1600 perforacja co 7,5',
      systemCode: '',
      description: '',
      additionalInfo: '10 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-bcd890',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1600 perforacja co 7,7',
      systemCode: '',
      description: '',
      additionalInfo: '30 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-efg123',
      amount: 0,
      manufactured: '',
      productName: 'Etykieta biała 100x150 (szt na rolce 1000szt), półbłysk -fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: 'blue',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-hij456',
      amount: 0,
      manufactured: '',
      productName: 'Etykieta czerwona 150x100 (szt na rolce 1000szt),półbłysk - fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-klm789',
      amount: 0,
      manufactured: '',
      productName: 'Etykieta niebieska 100x150 (szt na rolce 1000szt), półbłysk -fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-nop012',
      amount: 0,
      manufactured: '',
      productName: 'Etykiety żółte 150x100 szt na rolce 1000szt),półbłysk -fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart. (x8szt)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-qrs345',
      amount: 0,
      manufactured: '',
      productName: 'Etykiety zielone 150x100 (szt na rolce 1000 szt),półbłysk -fi = 40 mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-tuv678',
      amount: 0,
      manufactured: '',
      productName: 'Etykiety białe Małe 100x70 (szt na rolce 1000 szt),półbłysk- fi=40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: 'blue',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-wxy901',
      amount: 0,
      manufactured: '',
      productName: 'Gwoździe  firma PREBENA  CNW 25/50 BK RI (10,800 szt.)',
      systemCode: '',
      description: '',
      additionalInfo: '10 kart.',
      image: `https://budemi.pl/1146-medium_default/gwozdzie-budowlane-paczka-5kg-rozne-rozmiary.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-zab234',
      amount: 0,
      manufactured: '',
      productName: 'Taśma pakowa z nadrukiem - TOWAR NIEZGODNY',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firge-system.pl%2F77-large_default%2Fta%25C5%259Bma-pakowa-48-mm-60yd-muroll-opp-325-br%25C4%2585z.jpg&f=1&nofb=1&ipt=4a37bd7deaf610b8099d4c57e311d8797cfab64bf333f79893990b735e8f1ca2&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-cde567',
      amount: 0,
      manufactured: '',
      productName: 'Taśma pomarańczowa z nadrukiem- ENERGETO',
      systemCode: '',
      description: '',
      additionalInfo: '5 kart.(x36szt.)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firge-system.pl%2F77-large_default%2Fta%25C5%259Bma-pakowa-48-mm-60yd-muroll-opp-325-br%25C4%2585z.jpg&f=1&nofb=1&ipt=4a37bd7deaf610b8099d4c57e311d8797cfab64bf333f79893990b735e8f1ca2&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-fgh890',
      amount: 0,
      manufactured: '',
      productName: 'Biała taśma klejąca - White Solvent (szt rolek 36 pcs) - 48mm',
      systemCode: '',
      description: '',
      additionalInfo: '3 kart.(x10)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firge-system.pl%2F77-large_default%2Fta%25C5%259Bma-pakowa-48-mm-60yd-muroll-opp-325-br%25C4%2585z.jpg&f=1&nofb=1&ipt=4a37bd7deaf610b8099d4c57e311d8797cfab64bf333f79893990b735e8f1ca2&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-ijk123',
      amount: 0,
      manufactured: '',
      productName: 'Kalka do drukarki Index: WAX RESIN ECO OUT ( szt w kart. 10szt),104x450mm',
      systemCode: '',
      description: '',
      additionalInfo: '5 kart.(x36szt.)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sunpack.pl%2F_data%2Fsection-1%2F154.jpg&f=1&nofb=1&ipt=3df6ab76091bc9f57d0cb8e10ff4b191dbeeb28114436720146b7efad2d0d989&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-lmn456',
      amount: 0,
      manufactured: '',
      productName: 'Styropian grubość 2,0 cm ( w paczce 240 szt) - zamówienia J. Wasielewska',
      systemCode: '',
      description: '',
      additionalInfo: '5 kart.(x10szt.)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftytuurzadzisz.pl%2Fwp-content%2Fuploads%2F2020%2F07%2Fstyropian.jpg&f=1&nofb=1&ipt=42883ea9f7497c40192b59cdcc39dedf1d1dbd6939f9896e272f7a867f00cee3&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-opq789',
      amount: 0,
      manufactured: '',
      productName: 'Styropian grubość 0,5 cm ( w paczce 480 szt) - zamówienia J. Wasielewska',
      systemCode: '',
      description: '',
      additionalInfo: '50 paczek',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftytuurzadzisz.pl%2Fwp-content%2Fuploads%2F2020%2F07%2Fstyropian.jpg&f=1&nofb=1&ipt=42883ea9f7497c40192b59cdcc39dedf1d1dbd6939f9896e272f7a867f00cee3&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-rst012',
      amount: 0,
      manufactured: '',
      productName: 'Spray do hamulców BREMSEN FORCH ECO',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(30x500ml)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.allegroimg.com%2Foriginal%2F1e4fc8%2F117044b9494480f17c2ed6d6fe80&f=1&nofb=1&ipt=ac9c7cc44df3eb8b30c699592bf1c1f03c2ef52611a2e8f013220c70a96023c5&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-uvw345',
      amount: 0,
      manufactured: '',
      productName: 'Płyn Release IT - 5l baniaki',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: ``,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
  ],
};

export default suppliesData;
