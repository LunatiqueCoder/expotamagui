import {createMedia} from '@tamagui/react-native-media-driver';

export const media = createMedia({
  xl: {maxWidth: 1650},
  lg: {maxWidth: 1280},
  md: {maxWidth: 1020},
  sm: {maxWidth: 800},
  xs: {maxWidth: 660},
  xxs: {maxWidth: 390},
  gtXs: {minWidth: 660 + 1},
  gtSm: {minWidth: 800 + 1},
  gtMd: {minWidth: 1020 + 1},
  gtLg: {minWidth: 1280 + 1},
  gtXl: {minWidth: 1650 + 1},
  short: {maxHeight: 820},
  tall: {minHeight: 820},
  hoverNone: {hover: 'none'},
  pointerCoarse: {pointer: 'coarse'},
  pointerFine: {pointer: 'fine'},
});
