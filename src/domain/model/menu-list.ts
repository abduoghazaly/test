import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

export class MenuList {
  name: string;
  icon: IconDefinition;
  route: string;

  constructor(name: string, icon: IconDefinition, route: string) {
    this.name = name;
    this.icon = icon;
    this.route = route;
  }
}

export let menuList: MenuList[] = [
  { name: 'home', icon: faChartSimple, route: '/home' },
  { name: 'studyMaterials', icon: faChartSimple, route: '/studyMaterials' },
];
