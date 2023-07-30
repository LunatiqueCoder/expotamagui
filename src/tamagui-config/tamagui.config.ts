import {createTamagui} from 'tamagui';
import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/themes';
import {media} from './mediaQueries';
import {animations} from './animations';
import fonts from './fonts';

import {setupNativeSheet} from '@tamagui/sheet';
import {ModalView} from 'react-native-ios-modal';

setupNativeSheet('ios', ModalView);

const appConfig = createTamagui({
  shouldAddPrefersColorThemes: true,
  animations,
  fonts,
  shorthands,
  themes,
  tokens,
  media,
});

export type AppConfig = typeof appConfig;
export default appConfig;
