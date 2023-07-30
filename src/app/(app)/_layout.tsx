import {
  DrawerNavigationOptions,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {Drawer} from 'expo-router/drawer';

const screenOptions: DrawerNavigationOptions = {
  drawerPosition: 'right',
  headerLeft: () => null,
  headerRight: () => <DrawerToggleButton />,
};

export default function Layout() {
  return <Drawer screenOptions={screenOptions} />;
}
