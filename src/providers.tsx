import {ReactNode} from 'react';
import {Platform, useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TamaguiProvider} from 'tamagui';
import config from './tamagui-config';

export const Providers = ({children}: {children: ReactNode}) => {
  const theme = useColorScheme() || 'light';

  return (
    <SafeAreaProvider>
      <TamaguiProvider
        config={config}
        defaultTheme={theme}
        disableInjectCSS={Platform.OS !== 'web'}>
        <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
          {children}
        </ThemeProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
};
