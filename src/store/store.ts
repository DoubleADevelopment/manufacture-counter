import { configureStore } from '@reduxjs/toolkit';
//slice
import chemistrySlice from '../app/chemistry/store/slice/slice';
import gumsSlice from '../app/gums/store/slice/slice';
import pigmentsSlice from '../app/pigments/store/slice/slice';
import suppliesSlice from '../app/supplies/store/slice/slice';
//repository
import chemistryRepository from '../app/chemistry/repository/chemistry-repository';
import gumsRepository from '../app/gums/repository/gums-repository';
import pigmentsRepository from '../app/pigments/repository/pigments-repository';
import suppliesRepository from '../app/supplies/repository/supplies-repository';

const chemistryPackageName = chemistryRepository.getPackageData().dataPackageName;
const gumsPackageName = gumsRepository.getPackageData().dataPackageName;
const pigmentsPackageName = pigmentsRepository.getPackageData().dataPackageName;
const suppliesPackageName = suppliesRepository.getPackageData().dataPackageName;

export const store = configureStore({
  reducer: {
    [chemistryPackageName]: chemistrySlice,
    [gumsPackageName]: gumsSlice,
    [pigmentsPackageName]: pigmentsSlice,
    [suppliesPackageName]: suppliesSlice,
  },
});
