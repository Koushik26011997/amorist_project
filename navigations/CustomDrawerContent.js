import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Linking, Vibration, Alert } from 'react-native';
import { Rtext } from '../components/Rtext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { guestUserLogout } from '../store/auth';
import { useDispatch } from 'react-redux';

const CustomDrawerContent = props => {

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.auth.loading);

  const showLogoutAlert = () => {
    Vibration.vibrate([100, 200, 300, 400, 500], true);
    Alert.alert(
      "Amorist",
      'Do you want to logout?',
      [
        {
          text: 'No',
          onPress: () => Vibration.cancel(),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => (Vibration.cancel(), logout()) },
      ],
      { cancelable: false },
    );
    return true;
  }

  const logout = async () => {
    const token = await AsyncStorage.getItem('token');
    const device_token = await AsyncStorage.getItem('device_token');
    const app_api_key = await AsyncStorage.getItem('app_api_key');

    dispatch(guestUserLogout({
      token: token,
      device_token: device_token,
      app_api_key: app_api_key
    }));
  }

  return (
    // <View style={{ flex: 1, backgroundColor: "#f1f1f1", padding: 24, ...props }}>
    //   <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
    //     <Rtext fontWeight='bold'>Message</Rtext>
    //   </TouchableOpacity>
    // </View>

    <DrawerContentScrollView {...props} style={{ flex: 1 }}>
      {/* <DrawerItemList {...props} /> */}
      <Spinner visible={loader} />
      <DrawerItem
        label="Message"
        onPress={() => props.navigation.navigate("Chat")}
      />

      <DrawerItem
        label="Logout"
        onPress={() => showLogoutAlert()}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({

});
