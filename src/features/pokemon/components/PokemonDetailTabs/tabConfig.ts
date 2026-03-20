export const POKEMON_DETAIL_TABS = {
  TYPES: "types",
  STATS: "stats",
  SIZE: "size",
};

export type DetailTabsType =
  (typeof POKEMON_DETAIL_TABS)[keyof typeof POKEMON_DETAIL_TABS];

export const DETAIL_TABS_CONFIG = {
  [POKEMON_DETAIL_TABS.TYPES]: {
    key: POKEMON_DETAIL_TABS.TYPES,
    label: "Types",
  },
  [POKEMON_DETAIL_TABS.STATS]: {
    key: POKEMON_DETAIL_TABS.STATS,
    label: "Stats",
  },
  [POKEMON_DETAIL_TABS.SIZE]: {
    key: POKEMON_DETAIL_TABS.SIZE,
    label: "Size",
  },
} as const;
