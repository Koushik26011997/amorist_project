import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNav from './MainStackNav';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const RootDrawerNav = (props) => {

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerPosition: 'left' }}
      defaultStatus="closed"
      initialRouteName="Root"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Root" component={MainStackNav} />
    </Drawer.Navigator>

  );
};

export default RootDrawerNav;

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#F1F1F1',
  },
});
