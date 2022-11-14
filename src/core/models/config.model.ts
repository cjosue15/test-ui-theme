export interface IConfig {
  application: {
    name: 'Layouti';
  };
  layout: {
    sidebar: {
      collapsed: boolean;
    };
    theme: 'dark' | 'ligth';
    header: {
      type: 'static' | 'sticky' | 'floating';
    };
  };
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
