import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNav from './MainStackNav';
import CustomDrawerContent from './CustomDrawerContent';
import { AuthStackNav } from './AuthStackNav';
import FlashMessage from 'react-native-flash-message';

const Drawer = createDrawerNavigator();

const RootDrawerNav = (props) => {

  return (
    <>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, drawerPosition: 'left' }}
        defaultStatus="closed"
        initialRouteName="Root1"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* <Drawer.Screen name="Root1" component={AuthStackNav} /> */}
        <Drawer.Screen name="Root2" component={MainStackNav} />
      </Drawer.Navigator>
      <FlashMessage position="top" />
    </>
  );
};

export default RootDrawerNav;

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#F1F1F1',
  },
});
