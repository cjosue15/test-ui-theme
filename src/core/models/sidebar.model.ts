export interface INavSection {
  sectionName?: string;
  sectionItems: INavItem[];
}

export interface INavItem {
  title: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: INavItem[];
}
