//repository
import chemistryRepository from '../../repository/chemistry-repository';
//slice builder
import SliceBuilder from '../../../../store/store-builders/slice-builder';

export const chemistrySlice = SliceBuilder({ repository: chemistryRepository });

export default chemistrySlice.reducer;
