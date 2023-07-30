import '@tamagui/core/reset.css';
import {Stack} from 'expo-router';
import {tamaguiFonts} from 'src/tamagui-config/tamaguiFonts';
import {useFonts} from 'expo-font';
import {ActivityIndicator} from 'react-native';
import {Providers} from '../providers';

export default function HomeLayout() {
  const [loaded] = useFonts(tamaguiFonts);

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Providers>
      <Layout />
    </Providers>
  );
}

const Layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name={'(app)'} />
    </Stack>
  );
};
