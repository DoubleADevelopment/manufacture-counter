//types
import { rootBaseName } from '../../../variables';
import type { ISuppliesPackage } from '../types/data-types';
//vars
import { SuppliesLogsNames, SuppliesSettingsNames } from '../variables';

const gumsData: ISuppliesPackage = {
  dataPackageName: 'supplies',
  dataPackageUNID: 3004,
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
          name: 'Ilość',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'ilość',
    },
  ],
};

export default gumsData;
