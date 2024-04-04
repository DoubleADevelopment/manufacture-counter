//repository
import chemistryRepository from '../../repository/chemistry-repository';
//slice builder
import SliceBuilder from '../../../../store/slice-builder';

export const chemistrySlice = SliceBuilder({ repository: chemistryRepository });

export default chemistrySlice.reducer;
