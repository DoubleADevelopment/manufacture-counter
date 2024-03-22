//variables
import { ComponentsRouting } from '../variables';
//types
import type { ComponentsDataListType } from '../types';

const componentsListData: ComponentsDataListType = [
  {
    title: ComponentsRouting.PIGMENTS.title,
    link: ComponentsRouting.PIGMENTS.path,
    image:
      'https://webp-konwerter.infor.pl/eyJmIjoiaHR0cHM6Ly9nO/S5pbmZvci5wbC9wL19maW/xlcy8yMDIwMDAvcGlnbWV/udHkuanBnIiwidyI6ODAwfQ.png',
  },
  {
    title: ComponentsRouting.GUMS.title,
    link: ComponentsRouting.GUMS.path,
    image:
      'https://media.istockphoto.com/id/1221227912/pl/zdj%C4%99cie/granulki-z-czarnej-gumy.jpg?s=612x612&w=is&k=20&c=BDCbsa8HfJpGgPErJtdesdVwAA7vJCu_kZchYSGVaIE=',
  },
  {
    title: ComponentsRouting.CHEMISTRY.title,
    link: ComponentsRouting.CHEMISTRY.path,
    image: 'https://prus.edu.pl/wp-content/uploads/2022/09/chemia-.jpg',
  },
  {
    title: ComponentsRouting.SUPPLIES.title,
    link: ComponentsRouting.SUPPLIES.path,
    image:
      'https://www.planettogether.com/hs-fs/hubfs/lean_manu_tools.jpg?width=625&name=lean_manu_tools.jpg',
  },
];

export { componentsListData };
