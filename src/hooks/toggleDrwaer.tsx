import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

type RootParamList = {
  home: undefined;
  profile: undefined;
  payments: undefined;
  orders: undefined;
  favorites: undefined;
};
const useToggleDrawer = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();

  const toggleDrawer = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  return toggleDrawer;
};

export default useToggleDrawer;